import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolesPermissions extends BaseSchema {
  protected tableName = 'roles_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('permission_id').unsigned().references('id').inTable('permissions').onDelete('CASCADE');
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE');
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
