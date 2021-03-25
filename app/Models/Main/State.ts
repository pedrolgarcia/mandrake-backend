import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Country from './Country'
import Address from './Address'

export default class State extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public iso: string

  @column()
  public name: string
  
  @column()
  public countryId: number

  @hasMany(() => Address)
	public addresses: HasMany<typeof Address>
  
  @belongsTo(() => Country)
  public country: BelongsTo<typeof Country>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
