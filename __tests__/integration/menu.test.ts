import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1/`

test.group('Menu', () => {    
    test('should return menu by user role', async (assert) => {
        const response = await supertest(BASE_URL).get('menu').expect(200);

        assert.exists(response.body.menu);
    })
})