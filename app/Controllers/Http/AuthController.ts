import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ request, auth, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
    
        try {
            const token = await auth.use('api').attempt(email, password)
            return token.toJSON()
        } catch (error) {
            if (error.code === 'E_INVALID_AUTH_UID' || error.code === 'E_INVALID_AUTH_PASSWORD')
                return response.unauthorized({ error: 'Credenciais inválidas.' })
            
            return response.internalServerError({ error: 'Ocorreu um problema ao fazer login', details: error })
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        try {
            await auth.use('api').logout()
            return response.ok('Usuário deslogou.')
        } catch (error) {            
            return response.status(500).send({ error })
        }
    }
}
