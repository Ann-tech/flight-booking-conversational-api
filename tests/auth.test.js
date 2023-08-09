const request = require('supertest');
const app = require('../src/index');

describe('Test POST /api/v1/auth/signup', () => {
    const users = require('./fixtures/users.json');

    it('should return 201 success', async () => {
        const response = await request(app).post('/api/v1/auth/signup')
                .send(users[0])
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("signup successful");                  
    });
})