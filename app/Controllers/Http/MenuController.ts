import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { column } from '@ioc:Adonis/Lucid/Orm';

import Menu from 'App/Models/Main/Menu'
import Submenu from 'App/Models/Main/Submenu';
import Role from 'App/Models/Main/Role';

export default class MenuController {
  public async modules({ request, response }: HttpContextContract) {
    const user = request.ctx?.auth.user;
    await user?.preload('roles');
    
    const roles: number[] = user?.roles.map(role => Number(role.id)) || [];

    const roless = await Role.query().whereIn('id', roles).preload('menus').preload('submenus');
    console.log(roless)

    const menus = await Menu.query().preload('submenus').preload('roles');

    
    // let menu: Menu[] = [];

    // menus.forEach(item => {
    //   let submenus: Submenu[] = [];

    //   item.submenus.map(async (submenu) => {
    //     await submenu.preload('roles');

    //     submenu.roles.map(role => {
    //       if(roles.includes(role.id)) submenus.push(submenu)
    //     })
    //   })

    //   item.submenu = submenus;

    //   item.roles.forEach(role => {
    //     if(roles.includes(role.$extras.pivot_role_id)) menu.push(item)
    //   })
    // })
    
    return roless;
  }
}
