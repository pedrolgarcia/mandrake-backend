import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { policies } = Bouncer.registerPolicies({
  AddressPolicy: () => import('App/Policies/AddressPolicy')
})
