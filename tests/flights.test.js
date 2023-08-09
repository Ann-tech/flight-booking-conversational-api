const request = require('supertest');
const app = require('../src/index');

describe('Test POST /api/v1/auth/signup', () => {
    const flights = require('./fixtures/flights.json');
    const users = require('./fixtures/users.json');
    let loginAsAdmin = users[5];

    beforeEach(async () => {
        const response = await request(app).post('/api/v1/auth/login')
                .send(loginAsAdmin)
        ({ token } = response.body);
    })

    it('should return 201 success', async () => {
        let flight = flights[0];

        const response = await request(app).post('/api/v1/flights')
                .set({
                    "Authorization": `Bearer ${token}`
                })
                .send(flight)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("flight successfully scheduled");                  
    });

})