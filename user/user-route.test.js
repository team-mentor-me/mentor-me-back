const request = require('supertest');

const server = require('../server/server');

const db = require('../database/dbConfig.js');

describe('User', () => {
  afterEach(async () => {
    await db('user').truncate();
  });

  it('register user successfully returns 201 Created', async () => {
    const newUser = {
      username: 'string',
      password: 'string',
      name: 'string',
      email: 'string',
      role: 'string',
      photo: 'string'
    };

    const res = await request(server)
      .post('/api/register')
      .send(newUser);

    expect(res.status).toBe(201);
  });

  it('login successful 200 OK', async () => {
    const newUser = {
      username: 'admin',
      password: 'password',
      name: 'string',
      email: 'string',
      role: 'string',
      photo: 'string'
    };

    const res = await request(server)
      .post('/api/register')
      .send(newUser);

    expect(res.status).toBe(201);

    const res1 = await request(server)
      .post('/api/login')
      .send(newUser);

    expect(res1.status).toBe(200);
  });
});
