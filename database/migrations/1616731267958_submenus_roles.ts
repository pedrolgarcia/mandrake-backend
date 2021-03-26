import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SubmenusRoles extends BaseSchema {
  protected tableName = 'submenus_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('submenu_id').unsigned().references('id').inTable('submenus').onDelete('CASCADE');
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE');
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
