import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

import Submenu from './Submenu'
import Role from './Role'

export default class Menu extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public url: string
  
  @column()
  public icon?: string
  
  @column()
  public order?: number

  @hasMany(() => Submenu)
  public submenus: HasMany<typeof Submenu>
  
  @manyToMany(() => Role, {
    pivotTable: 'menus_roles'
  })
	public roles: ManyToMany<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
