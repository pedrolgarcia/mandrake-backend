import test from 'japa'
import supertest from 'supertest'

import Database from '@ioc:Adonis/Lucid/Database'
import { UserFactory } from 'Database/factories'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Authentication', (group) => {
    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })

    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })
    
    test('should return JWT when authenticate with valid credentials', async (assert) => {
        let password = '123456';

        const user = await UserFactory.merge({ password }).create();

        const response = await supertest(BASE_URL).post('/api/v1/login')
            .send({
                username: user.email,
                password,
            })
            .expect(200);

        assert.exists(response.body.token);
    })

    test('should not authenticate with invalid credentials', async (assert) => {
        let password = '123456';
        let wrongPassword = '12345';

        const user = await UserFactory.merge({ password }).create();

        const response = await supertest(BASE_URL).post('/api/v1/login')
            .send({
                username: user.email,
                password: wrongPassword,
            })
            .expect(401);

        assert.exists(response.body.error);
        assert.equal(response.body.error, 'Credenciais inválidas.');
    })
})