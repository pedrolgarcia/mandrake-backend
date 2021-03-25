import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersPermissions extends BaseSchema {
  protected tableName = 'users_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('permission_id').unsigned().references('id').inTable('permissions').onDelete('CASCADE');
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
