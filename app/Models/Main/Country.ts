import { DateTime } from 'luxon';
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import State from 'App/Models/Main/State';

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public iso: string

  @column()
	public iso_3: string

  @column()
  public name: string
  
  @hasOne(() => State)
  public state: HasOne<typeof State>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
