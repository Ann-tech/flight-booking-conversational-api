const request = require('supertest');
const app = require('../src/index');

describe('Test POST /api/v1/auth/signup', () => {
    const flights = require('./fixtures/flights.json');
    const users = require('./fixtures/users.json');

    it('should return 201 success', async () => {
        let flight = flights[0];
        let loginAsAdmin = users[5];

        const response = await request(app).post('/api/v1/auth/login')
                .send(loginAsAdmin)
        const { token } = response.body;

        const response2 = await request(app).post('/api/v1/flights')
                .set({
                    "Authorization": `Bearer ${token}`
                })
                .send(flight)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response2.body.success).toBe(true);
        expect(response2.body.message).toBe("flight successfully scheduled");                  
    });

})