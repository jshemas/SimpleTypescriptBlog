import assert from 'node:assert';
import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
  it('returns hello world json', async () => {
    const res = await request(app).get('/');

    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(res.body, { message: 'Hello, world!' });
  });
});
