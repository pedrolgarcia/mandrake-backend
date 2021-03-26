import { DateTime } from 'luxon'
import { BaseModel, beforeFetch, beforeFind, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { softDelete, softDeleteQuery } from 'App/Services/SoftDelete'

import User from './User'

export default class PhoneNumber extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public number: string

  @column()
  public area_code?: string

  @column()
  public country_code?: string

  @column()
  public type?: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ serializeAs: null})
	public deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeFind()
	public static softDeletesFind = softDeleteQuery;

	@beforeFetch()
	public static softDeletesFetch = softDeleteQuery;
  
	public async softDelete(column?: string) {
		await softDelete(this, column);
	}
}
