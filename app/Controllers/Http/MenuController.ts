import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Main/Role';
import User from 'App/Models/Main/User';

export default class MenuController {
  public async modules({ request, response }: HttpContextContract) {
    // console.log(request.ctx?.auth?.user?.gender?.name);
    const user = await User.find(request.ctx?.auth?.user?.id)
    console.log(user?.roles())
  }
}
