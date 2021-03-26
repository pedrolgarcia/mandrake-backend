import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Menu from 'App/Models/Main/Menu';

import menus from './data/menus.json';

export default class MenuSeeder extends BaseSeeder {
  public async run () {
    menus.map(async (menu) => {
      let data = await Menu.create(menu);
      data.related('submenus').createMany(menu.submenus);
    })
  }
}
