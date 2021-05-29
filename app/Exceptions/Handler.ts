import Logger from '@ioc:Adonis/Core/Logger'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }
  
  public async handle(error: any, ctx: HttpContextContract) {
    if (error.code === 'E_AUTHORIZATION_FAILURE') {
      return ctx.response.forbidden({ error: 'Usuário não tem permissão para realizar essa ação' })
    }

    if(error.code === 'E_INVALID_AUTH_UID' || error.code === 'E_INVALID_AUTH_PASSWORD') {
      return ctx.response.forbidden({ error: 'Credenciais inválidas.' })
    }

    if(error.code === 'E_UNAUTHORIZED_ACCESS') {
      return ctx.response.unauthorized({ error: 'Usuário não autenticado' })
    }

    if(error.status === 500) {
      return ctx.response.internalServerError({ error: 'Não foi possível realizar a operação', details: error })
    }

    return super.handle(error, ctx)
  }
}
