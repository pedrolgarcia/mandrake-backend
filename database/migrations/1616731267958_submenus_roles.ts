import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SubmenusRoles extends BaseSchema {
  protected tableName = 'submenus_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('submenu_id');
      table.integer('role_id');

      table.foreign('submenu_id').references('id').inTable('submenus').onDelete('CASCADE');
      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE');

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
