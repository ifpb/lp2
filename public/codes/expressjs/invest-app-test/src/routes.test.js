import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import crypto from 'crypto';
import app from './index.js';

let categoryPos;
let createdInvestment;

const newInvestment = {
  name: 'Tesouro Selic 2029',
  value: 10000,
  interest: '100% Selic',
  createdAt: '2025-01-01',
  broker: 'Banco Inter',
};

const updatedInvestment = {
  name: 'Tesouro Selic 2029',
  value: 10000,
  interest: '100% Selic',
  createdAt: '2025-01-01',
  broker: 'Banco Inter',
};

let validUser;

const invalidUser = {
  name: 'Invalid',
  email: 'invalid@email.com',
  password: '12345678',
  confirmationPassword: '12345678',
};

async function loadToken(user) {
  const response = await request(app).post('/api/signin').send(user);
  return response.body.token;
}

function createValidUser() {
  const validUser = {
    password: '12345678',
    confirmationPassword: '12345678',
  };

  const hash = crypto.randomBytes(20).toString('hex');
  validUser.name = `Valid ${hash}`;
  validUser.email = `valid-${hash}@email.com`;

  return validUser;
}

describe('Invest App', () => {
  before(() => {
    validUser = createValidUser();
  });

  describe('User Endpoints', () => {
    describe('POST /api/users', () => {
      it('should create a new user', async () => {
        const response = await request(app).post('/api/users').send(validUser);
        assert.strictEqual(response.statusCode, 201);
      });

      it('should not create a new user with same email', async () => {
        const response = await request(app).post('/api/users').send(validUser);
        assert.strictEqual(response.statusCode, 400);
      });

      it('should not create a new user without email', async () => {
        const { name, password } = validUser;
        const response = await request(app)
          .post('/api/users')
          .send({ name, password });
        assert.strictEqual(response.statusCode, 400);
      });
    });

    describe('GET /users/me', () => {
      it('should not show the current user without login', async () => {
        const response = await request(app).get('/api/users/me');
        assert.strictEqual(response.statusCode, 401);
      });

      it('should show the current user', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get('/api/users/me')
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
      });
    });
  });

  describe('Sign in Endpoints', () => {
    describe('POST /signin', () => {
      it('should login a valid user', async () => {
        const response = await request(app).post('/api/signin').send(validUser);
        assert.strictEqual(response.statusCode, 200);
      });

      it('should not login an invalid user', async () => {
        const response = await request(app)
          .post('/api/signin')
          .send(invalidUser);
        assert.strictEqual(response.statusCode, 401);
      });
    });
  });

  describe('Category Endpoints', () => {
    describe('GET /categories', () => {
      it('should not show categories without login', async () => {
        const response = await request(app).get(`/api/categories`);
        assert.strictEqual(response.statusCode, 401);
      });

      it('should show categories', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get(`/api/categories`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
      });

      it('should show categories with specific name', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get(`/api/categories?name=Pós`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
      });
    });
  });

  describe('Investments Endpoints', () => {
    describe('POST /investments', () => {
      it('should not create a new investment without login', async () => {
        const token = await loadToken(validUser);
        let response = await request(app)
          .get(`/api/categories?name=Pós`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);

        categoryPos = response.body;
        newInvestment.categoryId = categoryPos.id;

        response = await request(app)
          .post('/api/investments')
          .send(newInvestment);
        assert.strictEqual(response.statusCode, 401);
      });

      it('should create a new investment', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .post('/api/investments')
          .set('Authorization', 'bearer ' + token)
          .send(newInvestment);
        createdInvestment = response.body;
        assert.strictEqual(response.statusCode, 201);
      });

      it('should not create a new investment without name', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .post('/api/investments')
          .set('Authorization', 'bearer ' + token)
          .send({
            name: 'Tesouro Selic 2029',
          });
        assert.strictEqual(response.statusCode, 400);
      });
    });

    describe('GET /investments', () => {
      it('should not show all investments without login', async () => {
        const response = await request(app).get('/api/investments');
        assert.strictEqual(response.statusCode, 401);
      });

      it('should show all investments', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get('/api/investments')
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
      });

      it('should list the valid host', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get('/api/investments')
          .set('Authorization', 'bearer ' + token);
        const hasValidInvestment = response.body.some(
          (investment) => investment.name === createdInvestment.name
        );
        assert.strictEqual(hasValidInvestment, true);
      });

      it('should show all investments by name', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get('/api/investments?name=Tesouro')
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
      });
    });

    describe('GET /investments/:investmentId', () => {
      it('should not show a investment by id without login', async () => {
        const response = await request(app).get(
          `/api/investments/${createdInvestment.id}`
        );
        assert.strictEqual(response.statusCode, 401);
      });

      it('should show a investment by id', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get(`/api/investments/${createdInvestment.id}`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.body.name, createdInvestment.name);
      });

      it('should not show a investment with invalid id', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get(`/api/investments/x`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 400);
        assert.strictEqual(response.body[0].message, 'Invalid uuid');
      });
    });

    describe('PUT /investments/:investmentId', () => {
      it('should not update a investment without login', async () => {
        const token = await loadToken(validUser);
        let response = await request(app)
          .get(`/api/categories?name=Pós`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 200);

        categoryPos = response.body;
        updatedInvestment.categoryId = categoryPos.id;

        response = await request(app)
          .put(`/api/investments/${createdInvestment.id}`)
          .send(updatedInvestment);
        assert.strictEqual(response.statusCode, 401);
      });

      it('should update a investment', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .put(`/api/investments/${createdInvestment.id}`)
          .set('Authorization', 'bearer ' + token)
          .send(updatedInvestment);
        assert.strictEqual(response.statusCode, 200);
      });

      it('should list an updated investment', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .get('/api/investments')
          .set('Authorization', 'bearer ' + token);
        const hasValidInvestment = response.body.some(
          (investment) => investment.name === updatedInvestment.name
        );
        assert.strictEqual(hasValidInvestment, true);
      });

      it('should not update a investment without name', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .put(`/api/investments/${createdInvestment.id}`)
          .set('Authorization', 'bearer ' + token)
          .send({
            name: 'Tesouro Selic 2029',
          });
        assert.strictEqual(response.statusCode, 400);
      });

      it('should not update a investment with invalid id', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .put(`/api/investments/x`)
          .set('Authorization', 'bearer ' + token)
          .send(updatedInvestment);
        assert.strictEqual(response.statusCode, 400);
        assert.strictEqual(response.body[0].message, 'Invalid uuid');
      });
    });

    describe('DELETE /investments/:investmentId', () => {
      it('should not remove a investment without login', async () => {
        const response = await request(app).delete(
          `/api/investments/${createdInvestment.id}`
        );

        assert.strictEqual(response.statusCode, 401);
      });

      it('should remove a investment', async () => {
        const token = await loadToken(validUser);

        const response = await request(app)
          .delete(`/api/investments/${createdInvestment.id}`)
          .set('Authorization', 'bearer ' + token);

        assert.strictEqual(response.statusCode, 204);
      });

      it('should not delete a investment with invalid id', async () => {
        const token = await loadToken(validUser);
        const response = await request(app)
          .delete(`/api/investments/x`)
          .set('Authorization', 'bearer ' + token);
        assert.strictEqual(response.statusCode, 400);
        assert.strictEqual(response.body[0].message, 'Invalid uuid');
      });
    });
  });

  describe('404 Endpoints', () => {
    describe('GET /unknown-endpoint', () => {
      it('should show 404', async () => {
        const response = await request(app).get(`/api/unknown-endpoint`);
        assert.strictEqual(response.statusCode, 404);
      });
    });
  });
});
