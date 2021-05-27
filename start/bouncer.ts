import Bouncer from '@ioc:Adonis/Addons/Bouncer'

import User from 'App/Models/Main/User'
import Address from 'App/Models/Main/Address'

export const { actions } = Bouncer

.define('viewAddress', (user: User, address: Address) => {
  if(address.userId === user.id) return true

  return Bouncer.deny('Este endereço não pertence ao usuário', 403)
})

export const { policies } = Bouncer.registerPolicies({})
