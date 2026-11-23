const assert = require('node:assert/strict');
const { once } = require('node:events');
const test = require('node:test');
const { createApp } = require('./index');

test('POST /send-email contact form contract', async t => {
    const origin = 'http://localhost:7200';
    const deliveries = [];
    let fail = false;
    const server = createApp({
        allowedOrigins: new Set([origin]),
        sender: 'sender@example.com',
        companyEmail: 'team@example.com',
        sendMail: async mail => {
            deliveries.push(mail);
            if (fail) throw new Error('private provider detail');
        },
    }).listen(0, '127.0.0.1');

    t.after(() => new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
    }));
    await once(server, 'listening');
    const url = `http://127.0.0.1:${server.address().port}/send-email`;
    const contact = {
        name: 'Test Name',
        phone: '+966 1234567890',
        email: 'visitor@example.com',
        service: ['Design', 'Maintenance'],
        message: '',
    };
    const post = (body, headers = {}) => fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Origin: origin, ...headers },
        body,
    });
    const submit = (payload, headers) => post(JSON.stringify(payload), headers);

    await t.test('handles allowed and blocked CORS preflights', async () => {
        for (const [requestOrigin, status] of [[origin, 204], ['https://other.example', 403]]) {
            const response = await fetch(url, {
                method: 'OPTIONS',
                headers: {
                    Origin: requestOrigin,
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'content-type',
                },
            });
            assert.equal(response.status, status);
            assert.equal(response.headers.get('access-control-allow-origin'), status === 204 ? origin : null);
        }
        const blocked = await submit(contact, { Origin: 'https://other.example' });
        assert.equal(blocked.status, 403);
        assert.equal(deliveries.length, 0);
    });

    await t.test('rejects invalid fields, JSON, media type and oversized bodies', async () => {
        for (const fields of [
            { email: 'first@example.com,second@example.com' },
            { name: '' },
            { phone: 'abc' },
            { service: [{}] },
            { message: 'a'.repeat(4001) },
        ]) {
            const response = await submit({ ...contact, ...fields });
            assert.equal(response.status, 400);
        }
        assert.equal((await post('{')).status, 400);
        assert.equal((await post('{}', { 'Content-Type': 'text/plain' })).status, 415);
        assert.equal((await submit({ ...contact, message: 'a'.repeat(50000) })).status, 413);
        assert.equal(deliveries.length, 0);
    });

    await t.test('accepts the Angular payload and existing string service values', async () => {
        const response = await submit(contact);
        assert.equal(response.status, 200);
        assert.equal(response.headers.get('access-control-allow-origin'), origin);
        assert.deepEqual(await response.json(), { message: 'Email sent successfully' });
        assert.equal(deliveries[0].to, contact.email);
        assert.equal(deliveries[0].cc, 'team@example.com');
        assert.match(deliveries[0].text, /Design, Maintenance/);
        assert.equal((await submit({ ...contact, service: 'Design', message: 'Hello' })).status, 200);
        assert.match(deliveries[1].text, /Hello/);
    });

    await t.test('returns a generic response for SMTP failures', async () => {
        fail = true;
        const response = await submit(contact);
        assert.equal(response.status, 502);
        assert.deepEqual(await response.json(), { message: 'Error sending email' });
    });
});
