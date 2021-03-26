import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import Menu from './Menu'

export default class Submenu extends BaseModel {
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

  @column()
  public menuId: number

  @belongsTo(() => Menu)
  public menu: BelongsTo<typeof Menu>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
