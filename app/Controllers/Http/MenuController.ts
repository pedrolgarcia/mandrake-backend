import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Menu from 'App/Models/Main/Menu'

export default class MenuController {
  public async modules({ request, response }: HttpContextContract) {
    const menu = await Menu.all()
    return menu
  }
}
