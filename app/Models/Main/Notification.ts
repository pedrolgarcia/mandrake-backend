import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public link?: string

  @column()
  public readed: boolean

  @column()
  public data?: JSON

  @column()
  public senderId?: number

  @belongsTo(() => User)
  public sender: BelongsTo<typeof User>

  @column()
  public receiverId?: number

  @belongsTo(() => User)
  public receiver: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
