import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, beforeFind, beforeFetch, BaseModel, manyToMany, ManyToMany, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Role from './Role'
import Email from './Email'
import Gender from './Gender'
import Permission from './Permission'
import Address from './Address'
import Notification from './Notification'
import PhoneNumber from './PhoneNumber'

import { softDelete, softDeleteQuery } from '../../Services/SoftDelete'

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public first_name: string

	@column()
	public last_name: string

	@column()
	public email: string

	@column()
	public cpf: string

	@column()
	public birth_date: Date
	
	@column()
	public phone_number: string

	@column()
	public genderId: number

	@belongsTo(() => Gender)
  public gender: BelongsTo<typeof Gender>

	@column()
	public pending_approval: boolean

	@column()
	public approved: boolean

	@column()
	public active: boolean

	@column({ serializeAs: null })
	public password: string

	@column()
	public rememberMeToken?: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column.dateTime({ serializeAs: null})
	public deletedAt: DateTime

	@hasMany(() => Email)
	public emails: HasMany<typeof Email>

	@hasMany(() => PhoneNumber)
	public phones: HasMany<typeof PhoneNumber>

	@hasMany(() => Address)
	public addresses: HasMany<typeof Address>

	@hasMany(() => Notification)
	public notifications: HasMany<typeof Notification>
	
	@manyToMany(() => Role, {
		pivotTable: 'users_roles'
	})
	public roles: ManyToMany<typeof Role>
	
	@manyToMany(() => Permission)
	public permissions: ManyToMany<typeof Permission>

	@beforeSave()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await Hash.make(user.password)
		}
	}

	@beforeFind()
	public static softDeletesFind = softDeleteQuery;

	@beforeFetch()
	public static softDeletesFetch = softDeleteQuery;
  
	public async softDelete(column?: string) {
		await softDelete(this, column);
	}
}
