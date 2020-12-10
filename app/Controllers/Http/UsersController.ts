import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
    async create({ request }: HttpContextContract) {
        const data = request.only(['email', 'password']);
        
        await User.create(data);
    }
}
