import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>, allowedRoles: string[] = ["*"]) {
    const user = request.ctx?.auth.user;
    await user?.preload('roles');

    console.log(allowedRoles)

    let canAccess = false;

    if(allowedRoles.includes("*")) {
      canAccess = true;
    } else {
      user?.roles.forEach(role => {
        if(allowedRoles.includes(role.codename)) canAccess = true
      })
    }

    if(canAccess) {
      await next();
    } else {
      return response.unauthorized({ error: "Usuário não possui permissão para acessar essa rota." })
    }
    
  }
}
