import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/Main/User';

export default class UserSeeder extends BaseSeeder {
  public async run () {
      await Promise.all(users.map(async (user) => {
        let data = await User.create(user.user);
        data.related('roles').attach(user.roles);
      }))
  }
}

const users = [
  {
    user: {
      first_name: 'Admin',
      last_name: 'Mandrake',
      email: 'admin@mandrake.com',
      password: 'mandrake',
      cpf: '222.222.222-22',
      active: true,
      birth_date: new Date('08-09-1998'),
      genderId: 1,
      gender: {
        id: 1,
        name: 'Masculino'
      },
      phone_number: '21968312308',
      pending_approval: false,
      approved: true,
    },
    roles: [1]
  },
  {
    user: {
      first_name: 'Pedro',
      last_name: 'Lopes',
      email: 'pedrolopes.info@gmail.com',
      password: 'mandrake',
      cpf: '111.111.111-11',
      active: true,
      birth_date: new Date('08-09-1998'),
      genderId: 1,
      gender: {
        id: 1,
        name: 'Masculino'
      },
      phone_number: '21968312309',
      pending_approval: false,
      approved: true
    },
    roles: [3]
  },
]