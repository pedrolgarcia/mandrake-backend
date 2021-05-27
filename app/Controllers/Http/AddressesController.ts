import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Main/Address'

export default class AddressesController {
  public async index({ bouncer }: HttpContextContract) {
    const address = await Address.findOrFail(1);
    
    await bouncer.authorize('viewAddress', address)
    console.log(address)
  }
}
