import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Permission from './Permission'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public name: string

  @manyToMany(() => User, {
    pivotTable: 'users_roles',
  })
  public users: ManyToMany<typeof User>

  @manyToMany(() => Permission)
  public permissions: ManyToMany<typeof Permission>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
