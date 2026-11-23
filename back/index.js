const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const EMAIL = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;
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

function createApp({ allowedOrigins, sender, companyEmail, sendMail }) {
    const app = express();
    app.disable('x-powered-by');

    const contactCors = cors({ origin: [...allowedOrigins], methods: ['POST'] });
    app.use('/send-email', (req, res, next) => {
        res.vary('Origin');
        if (req.headers.origin && !allowedOrigins.has(req.headers.origin)) {
            return res.status(403).json({ message: 'Origin not allowed' });
        }
        next();
    }, contactCors);

    app.post('/send-email', (req, res, next) => {
        if (!req.is('application/json')) {
            return res.status(415).json({ message: 'Expected application/json' });
        }
        next();
    }, express.json({ limit: '48kb' }), async (req, res) => {
        const contact = validateContact(req.body);
        if (!contact) return res.status(400).json({ message: 'Invalid contact details' });

        const { name, email, phone, message, service } = contact;
        const serviceText = service ? `your interest in our ${service} services` : 'contacting us';
        const messageText = message ? `\n\nYour message:\n${message}` : '';

        try {
            await sendMail({
                from: sender,
                to: email,
                cc: companyEmail,
                subject: 'Thank You for Contacting Geoscape Landscape!',
                text: `Dear ${name},\n\nThank you for ${serviceText}.${messageText}\n\nOur team will review your submission and get back to you via the provided phone number: ${phone}.\n\nBest regards,\nThe Geoscape Landscape Team`,
            });
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch {
            console.error('Email delivery failed');
            return res.status(502).json({ message: 'Error sending email' });
        }
    });

    app.use((_req, res) => res.status(404).json({ message: 'Not found' }));
    app.use((error, _req, res, next) => {
        if (res.headersSent) return next(error);
        const responses = {
            400: 'Invalid JSON body',
            413: 'Request body too large',
            415: 'Unsupported request encoding',
        };
        if (Object.hasOwn(responses, error.status)) {
            return res.status(error.status).json({ message: responses[error.status] });
        }
        console.error('Unexpected API error');
        return res.status(500).json({ message: 'Internal server error' });
    });

    return app;
}

if (require.main === module) {
    const {
        GMAIL_USER,
        GMAIL_APP_PASSWORD,
        CONTACT_EMAIL,
        ALLOWED_ORIGINS = 'http://localhost:7200',
        PORT = '3000',
    } = process.env;

    if (!isEmail(GMAIL_USER) || !GMAIL_APP_PASSWORD?.trim() || !isEmail(CONTACT_EMAIL)) {
        console.error('Set GMAIL_USER, GMAIL_APP_PASSWORD and CONTACT_EMAIL in the environment.');
        process.exitCode = 1;
    } else {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 15000,
        });
        const app = createApp({
            allowedOrigins: new Set(ALLOWED_ORIGINS.split(',').map(origin => origin.trim()).filter(Boolean)),
            sender: GMAIL_USER,
            companyEmail: CONTACT_EMAIL,
            sendMail: mail => transporter.sendMail(mail),
        });
        app.listen(Number(PORT), () => console.log(`API listening on port ${PORT}`));
    }
}

module.exports = { createApp };
