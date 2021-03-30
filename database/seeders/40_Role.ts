import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Main/Role';

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await Role.createMany(roles.map((role) => ({...role})));
  }
}

const roles = [
  { "id": 1, "name": "Administrador", "codename": "admin" },
  { "id": 2, "name": "Operador", "codename": "operator" },
  { "id": 3, "name": "Usuário", "codename": "user" }
]