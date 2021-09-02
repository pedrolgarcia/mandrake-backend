import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/Main/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    genderId: 1,
    birth_date: faker.date.past(20),
    cpf: faker.datatype.number(11).toString(),
    phone_number: faker.phone.phoneNumber('(00)00000-0000'),
    pending_approval: false,
    approved: true,
    active: true,
  }
}).build()
