import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersPermissions extends BaseSchema {
  protected tableName = 'users_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('permission_id');

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('permission_id').references('id').inTable('permissions').onDelete('CASCADE');
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
