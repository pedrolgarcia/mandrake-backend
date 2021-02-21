import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class State extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public iso: string

  @column()
  public name: string
  
  @column()
  public countryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
