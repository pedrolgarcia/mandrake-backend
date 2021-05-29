import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Main/Address'

export default class AddressesController {
  public async index({ bouncer }: HttpContextContract) {
    const address = await Address.findOrFail(1);
    
    await bouncer.with('AddressPolicy').authorize('view', address)
    console.log(address)
  }
}
