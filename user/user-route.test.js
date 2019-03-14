const request = require('supertest');

const server = require('../server/server');

const db = require('../database/dbConfig.js');

const newUser = {
  username: 'admin',
  password: 'password',
  name: 'string',
  email: 'string',
  role: 'string',
  photo: 'string'
};

// token has 24hr life span
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTUyNTE3Nzg2LCJleHAiOjE1NTI2MDQxODZ9.NQVrIGTpSOckQbxbQBK3bblOZo8VEXVekZm97O4LR08';

describe('User', () => {
  afterEach(async () => {
    await db('user').truncate();
  });

  it('POST register 201 Created and JSON', async () => {
    const res = await request(server)
      .post('/api/register')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(201);
  });

  it('POST login 200 OK and JSON', async () => {
    await request(server)
      .post('/api/register')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(201);

    await request(server)
      .post('/api/login')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('GET use by id return 200 OK and return JSON', async () => {
    await request(server)
      .post('/api/register')
      .send(newUser);

    await request(server)
      .get('/api/user/1')
      .set({ Authorization: token })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
