import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from './worker.mjs';

const origin = 'http://localhost:7200';
const frontendOrigin = 'http://localhost:6200';
const env = {
    ALLOWED_ORIGINS: origin,
    MOCK_EMAILS: 'true',
};
const contact = {
    name: 'Test Name',
    phone: '+966 1234567890',
    email: 'visitor@example.com',
    service: ['Design', 'Maintenance'],
    message: '',
};

function request(body, options = {}) {
    return new Request('https://worker.test/send-email', {
        method: options.method || 'POST',
        headers: {
            Origin: options.origin || origin,
            'Content-Type': options.contentType || 'application/json',
        },
        body: options.rawBody ?? JSON.stringify(body),
    });
}

test('accepts Angular contact form data in mock mode', async () => {
    const response = await worker.fetch(request(contact), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
    assert.deepEqual(await response.json(), { message: 'Email sent successfully' });
});

test('allows the Angular development server origin', async () => {
    const response = await worker.fetch(request(contact, { origin: frontendOrigin }), {
        ...env,
        ALLOWED_ORIGINS: `${origin},${frontendOrigin}`,
    });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Access-Control-Allow-Origin'), frontendOrigin);
});

test('rejects invalid details and unexpected origins', async () => {
    assert.equal((await worker.fetch(request({ ...contact, email: 'a@b.com,other@b.com' }), env)).status, 400);
    assert.equal((await worker.fetch(request(contact, { origin: 'https://other.example' }), env)).status, 403);
});

test('handles CORS preflight and unsupported methods', async () => {
    const preflight = await worker.fetch(new Request('https://worker.test/send-email', {
        method: 'OPTIONS',
        headers: {
            Origin: origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'content-type',
        },
    }), env);
    assert.equal(preflight.status, 204);
    assert.equal((await worker.fetch(new Request('https://worker.test/send-email'), env)).status, 405);
});

test('rejects malformed JSON and oversized requests', async () => {
    assert.equal((await worker.fetch(request({}, { rawBody: '{' }), env)).status, 400);
    assert.equal((await worker.fetch(request({ ...contact, message: 'a'.repeat(50000) }), env)).status, 413);
});

test('does not report delivery success when provider configuration is missing', async () => {
    const response = await worker.fetch(request(contact), { ALLOWED_ORIGINS: origin });
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { message: 'Error sending email' });
});
