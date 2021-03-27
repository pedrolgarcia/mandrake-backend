import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MenusRoles extends BaseSchema {
  protected tableName = 'menus_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('menu_id');
      table.integer('role_id');

      table.foreign('menu_id').references('id').inTable('menus').onDelete('CASCADE');
      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE');
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
