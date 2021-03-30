import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Menu from 'App/Models/Main/Menu'

export default class MenuController {
  public async modules({ request, response }: HttpContextContract) {
    const user = request.ctx?.auth.user;
    await user?.preload('roles');
    
    const roles: number[] = user?.roles.map(role => Number(role.id)) || [];
    console.log(roles)

    const menu = await Menu.query().preload('roles');
    console.log(menu?.roles)
    
    return menu;
  }
}
