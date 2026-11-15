
const request = require('supertest');
const app = require('../server');
const { test } = require('node:test');
const assert = require('node:assert');

test('Health check', async () => {
    const res = await request(app).get('/health');

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.status, 'UP');
});

test('Get todos', async () => {
    const res = await request(app).get('/todos');

    assert.strictEqual(res.status, 200);
    assert.ok(Array.isArray(res.body));
});

test('Add todo', async () => {
    const res = await request(app)
        .post('/todos')
        .send({ title: 'Complete DevOps' });

    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.title, 'Complete DevOps');
});
