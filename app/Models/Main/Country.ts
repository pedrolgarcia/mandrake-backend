import { DateTime } from 'luxon';
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';

import State from './State';
import Address from './Address';

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public iso: string

  @column()
	public iso_3: string

  @column()
  public name: string
  
  @hasMany(() => State)
  public states: HasMany<typeof State>

  @hasMany(() => Address)
	public addresses: HasMany<typeof Address>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
