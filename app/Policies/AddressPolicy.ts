import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/Main/User'
import Address from 'App/Models/Main/Address'

export default class AddressPolicy extends BasePolicy {
	public allowedRoles = ['Administrador', 'Usuário'];

	public async before(user: User | null) {
    let allowed = false;

		await user?.load('roles');
    user?.roles.forEach(role => {
      if(this.allowedRoles.includes(role.name)) allowed = true
    });

    return allowed;
  }

	public async view(user: User, address: Address) {
    return address.userId === user.id
  }

	public async create(user: User) {}
	public async update(user: User, address: Address) {}
	public async delete(user: User, address: Address) {}
}
