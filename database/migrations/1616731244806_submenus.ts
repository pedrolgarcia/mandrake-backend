import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Submenus extends BaseSchema {
  protected tableName = 'submenus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('url').notNullable();
      table.string('icon').nullable();
      table.integer('order').nullable();
      table.integer('menu_id');

      table.foreign('menu_id').references('id').inTable('menus');

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
