import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/Main/User";

export default class UsersController {
    public async index({ response }: HttpContextContract) {
        const users = await User.all()
        return response.ok(users)
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            const { email, password } = request.only(['email', 'password']);

            if(!email || !password)
                return response.badRequest({ error: 'Verifique se todos os campos foram preenchidos corretamente.' })
                
            await User.create({ email, password })
            
            return response.ok('Usuário criado com sucesso!')
        } catch(error) {
            return response.internalServerError({ error: 'Ocorreu um problema ao criar o usuário', details: error })
        }
    }

    public async destroy({ response, params }: HttpContextContract) {
        try {
            const user = await User.findOrFail(params.id)
            await user.softDelete()
            
            return response.ok('Usuário excluído com sucesso!')
        } catch(error) {
            console.log(error)
            return response.internalServerError({ error: 'Ocorreu um problema ao excluir o usuário', details: error })
        }
    }
}
