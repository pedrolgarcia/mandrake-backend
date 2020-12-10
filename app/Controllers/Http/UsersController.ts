import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
    public async index({ auth }: HttpContextContract) {
        await auth.authenticate()

        const users = await User.all()
        return users
    }

    public async create({ request, auth }: HttpContextContract) {
        await auth.authenticate();

        const data = request.only(['email', 'password']);
        
        await User.create(data);
    }
}
