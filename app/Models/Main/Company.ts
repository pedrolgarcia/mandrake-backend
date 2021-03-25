import { DateTime } from 'luxon'
import { BaseModel, beforeFetch, beforeFind, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { softDelete, softDeleteQuery } from 'App/Services/SoftDelete'

import Address from './Address'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public company_name: string

  @column()
  public trading_name: string
  
  @column()
  public cnpj: string
  
  @column()
  public email?: string
  
  @column()
  public logo_url: string
  
  @column()
  public description?: string

  @column()
  public foundation_year?: number

  @column()
  public pending_approval: boolean

  @column()
  public approved: boolean

  @column()
  public active: boolean

  @hasMany(() => Address)
	public addresses: HasMany<typeof Address>

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
