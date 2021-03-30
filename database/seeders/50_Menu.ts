import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Menu from 'App/Models/Main/Menu';

export default class MenuSeeder extends BaseSeeder {
  public async run () {
    await Promise.all(menus.map(async (menu) => {
      let data = await Menu.create(menu);
      data.related('submenus').createMany(menu.submenus);

      data.related('roles').attach(menu.roles);
    }))
  }
}

const menus = [
  {
    "name": "Dashboard",
    "url": "/",
    "icon": "space_dashboard",
    "order": 1,
    "roles": [1, 2],
    "submenus": [],
  },
  {
    "name": "Usuários",
    "url": "/users",
    "icon": "people",
    "order": 2,
    "roles": [1, 2],
    "submenus": [],
  },
  {
    "name": "Configurações",
    "url": "/settings",
    "icon": "settings",
    "order": 3,
    "roles": [2],
    "submenus": [
      {
        "name": "Tema",
        "url": "/settings/theme",
        "icon": "palette",
        "order": 1
      }
    ]
  }
]