import test from 'japa'
import supertest from 'supertest'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/Main/User'
import { DateTime } from 'luxon'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Authentication', (group) => {
    // group.beforeEach(async () => {
    //     await Database.beginGlobalTransaction()
    // })

    // group.afterEach(async () => {
    //     await Database.rollbackGlobalTransaction()
    // })
    
    test('should return JWT token when authenticate with valid credentials', async (assert) => {
        // const user = await User.create({
        //     email: 'pedro@teste.com.br',
        //     password: '123456',
        //     genderId: 1,
        //     birth_date: new Date('1998-08-09'),
        //     cpf: '111-111-111.11',
        //     first_name: 'Pedro',
        //     last_name: 'Pedro',
        //     phone_number: '2121212121'
        // });

        // assert.equal(user.email, 'pedro@teste.com.br');
    })
})