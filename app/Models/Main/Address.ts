import { DateTime } from 'luxon'
import { BaseModel, beforeFetch, beforeFind, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { softDelete, softDeleteQuery } from 'App/Services/SoftDelete'
import Country from './Country'
import User from './User'
import State from './State'
import Company from './Company'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public address: string
  
  @column()
  public cep: string
  
  @column()
  public number?: string
  
  @column()
  public complement?: string
  
  @column()
  public district: string
  
  @column()
  public city: string
  
  @column()
  public latitude?: string
  
  @column()
  public longitude?: string

  @column()
  public countryId: number

  @belongsTo(() => Country)
  public country: BelongsTo<typeof Country>

  @column()
  public stateId: number

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public companyId: number

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>
  
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
