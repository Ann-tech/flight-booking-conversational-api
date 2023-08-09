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
        let flightWithCompleteData = flights[0];

        const response = await request(app).post('/api/v1/flights')
                .set({
                    "Authorization": `Bearer ${token}`
                })
                .send(flightWithCompleteData)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("flight successfully scheduled");                  
    });

    it('should return 400 error', async () => {
        let flightWithoutCompleteData = flights[1];

        const response = await request(app).post('/api/v1/flights')
                .set({
                    "Authorization": `Bearer ${token}`
                })
                .send(flightWithoutCompleteData)
                .expect(400)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("provide required fields");                  
    });
    

})