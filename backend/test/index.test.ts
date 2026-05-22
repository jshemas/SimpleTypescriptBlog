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

describe('GET /posts', () => {
  it('returns a list of fake blog posts', async () => {
    const res = await request(app).get('/posts');

    assert.strictEqual(res.status, 200);
    assert.ok(Array.isArray(res.body), 'response body should be an array');
    assert.ok(res.body.length > 0, 'response body should contain at least one post');

    const post = res.body[0];
    assert.strictEqual(typeof post.id, 'string');
    assert.strictEqual(typeof post.title, 'string');
    assert.strictEqual(typeof post.summary, 'string');
    assert.strictEqual(typeof post.author, 'string');
    assert.strictEqual(typeof post.publishedAt, 'string');
    assert.ok(Array.isArray(post.tags), 'post.tags should be an array');
    assert.strictEqual(typeof post.contentPreview, 'string');
  });
});
