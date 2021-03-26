import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Main/Role';

import roles from './data/roles.json';

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await Role.createMany(roles.map((role) => ({...role})));
  }
}
