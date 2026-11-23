const EMAIL = /^[a-z0-9!#$%&'*+/=?^`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;
const PHONE = /^\+?[0-9][0-9 ()-]*[0-9]$/;
const CONTROL_CHARACTERS = /[\x00-\x1f\x7f]/;

function isEmail(value) {
    return typeof value === 'string' && value.length <= 254 &&
        value.split('@')[0].length <= 64 && EMAIL.test(value);
}

function singleLine(value, limit) {
    return typeof value === 'string' && value.length <= limit &&
        !CONTROL_CHARACTERS.test(value);
}

function validateContact(body) {
    if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

    const { name, email, phone, message = '', service = '' } = body;
    if (!singleLine(name, 120) || !name.trim() ||
        !singleLine(email, 254) || !isEmail(email.trim()) ||
        !singleLine(phone, 32) || !PHONE.test(phone.trim()) ||
        !/^\d{7,15}$/.test(phone.replace(/\D/g, '')) ||
        typeof message !== 'string' || message.length > 4000 ||
        /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(message)) {
        return null;
    }

    const services = Array.isArray(service) ? service : [service];
    if (services.length > 20 || !services.every(item => singleLine(item, 120))) return null;

    return {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        service: services.map(item => item.trim()).filter(Boolean).join(', '),
    };
}

function json(body, status, headers = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
    });
}

function corsHeaders(origin, allowedOrigins) {
    const headers = { Vary: 'Origin' };
    if (origin && allowedOrigins.has(origin)) {
        headers['Access-Control-Allow-Origin'] = origin;
        headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
        headers['Access-Control-Allow-Headers'] = 'Content-Type';
        headers['Access-Control-Max-Age'] = '86400';
    }
    return headers;
}

async function sendEmail(contact, env) {
    if (env.MOCK_EMAILS === 'true') return;
    if (!env.RESEND_API_KEY || !isEmail(env.CONTACT_EMAIL) || !env.RESEND_FROM) {
        throw new Error('Email service is not configured');
    }

    const serviceText = contact.service
        ? `your interest in our ${contact.service} services`
        : 'contacting us';
    const messageText = contact.message ? `\n\nYour message:\n${contact.message}` : '';
    const text = `Dear ${contact.name},\n\nThank you for ${serviceText}.${messageText}\n\nOur team will review your submission and get back to you via the provided phone number: ${contact.phone}.\n\nBest regards,\nThe Geoscape Landscape Team`;

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: env.RESEND_FROM,
            to: [contact.email],
            cc: [env.CONTACT_EMAIL],
            subject: 'Thank You for Contacting Geoscape Landscape!',
            text,
        }),
    });

    if (!response.ok) throw new Error('Email provider rejected the request');
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const allowedOrigins = new Set(
            (env.ALLOWED_ORIGINS || 'http://localhost:6200,http://localhost:7200,https://geoscape.sa,https://www.geoscape.sa')
                .split(',').map(origin => origin.trim()).filter(Boolean),
        );
        const origin = request.headers.get('Origin');
        const headers = corsHeaders(origin, allowedOrigins);

        if (url.pathname !== '/send-email') return json({ message: 'Not found' }, 404);
        if (origin && !allowedOrigins.has(origin)) return json({ message: 'Origin not allowed' }, 403);

        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: origin ? 204 : 400,
                headers,
            });
        }
        if (request.method !== 'POST') {
            return json({ message: 'Method not allowed' }, 405, { Allow: 'POST, OPTIONS', ...headers });
        }
        if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
            return json({ message: 'Expected application/json' }, 415, headers);
        }
        const declaredLength = Number(request.headers.get('Content-Length'));
        if (declaredLength > 48 * 1024) {
            return json({ message: 'Request body too large' }, 413, headers);
        }

        let body;
        try {
            const raw = await request.text();
            if (new TextEncoder().encode(raw).length > 48 * 1024) {
                return json({ message: 'Request body too large' }, 413, headers);
            }
            body = JSON.parse(raw);
        } catch {
            return json({ message: 'Invalid JSON body' }, 400, headers);
        }

        const contact = validateContact(body);
        if (!contact) return json({ message: 'Invalid contact details' }, 400, headers);
        try {
            await sendEmail(contact, env);
            return json({ message: 'Email sent successfully' }, 200, headers);
        } catch {
            console.error('Email delivery failed');
            return json({ message: 'Error sending email' }, 502, headers);
        }
    },
};
