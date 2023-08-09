const request = require('supertest');
const app = require('../src/index');

describe('Test POST /api/v1/auth/signup', () => {
    const users = require('./fixtures/users.json');

    it('should return 201 success', async () => {
        let userWithCompleteData = users[0];
        const response = await request(app).post('/api/v1/auth/signup')
                .send(userWithCompleteData)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("signup successful");                  
    });

    it('should return 400 error', async () => {
        let userWithoutCompleteData = users[1];
        const response = await request(app).post('/api/v1/auth/signup')
                .send(userWithoutCompleteData)
                .expect(400)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("provide required fields");                  
    });
})