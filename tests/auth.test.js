const request = require('supertest');
const app = require('../src/index');

describe('Test POST /api/v1/auth/signup', () => {
    const users = require('./fixtures/users.json');

    it('should return 201 success', async () => {
        let userWithCompleteSignupData = users[0];
        const response = await request(app).post('/api/v1/auth/signup')
                .send(userWithCompleteSignupData)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("signup successful");                  
    });

    it('should return 400 error', async () => {
        let userWithoutCompleteSignupData = users[1];
        const response = await request(app).post('/api/v1/auth/signup')
                .send(userWithoutCompleteSignupData)
                .expect(400)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("provide required fields");                  
    });

    it('should return 201 success', async () => {
        let adminWithCompleteSignupData = users[4];
        const response = await request(app).post('/api/v1/auth/signup')
                .send(adminWithCompleteSignupData)
                .expect(201)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("signup successful");                  
    });

    it('should return 200 success', async () => {
        let userWithCompleteLoginData = users[2];
        const response = await request(app).post('/api/v1/auth/login')
                .send(userWithCompleteLoginData)
                .expect(200)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("token");                  
    });

    it('should return 401 unauthorized', async () => {
        let userWithIncorrectLoginData = users[3];
        const response = await request(app).post('/api/v1/auth/login')
                .send(userWithIncorrectLoginData)
                .expect(401)
                .expect("Content-Type", /json/);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toHaveProperty("Invalid credentials");                  
    });
})