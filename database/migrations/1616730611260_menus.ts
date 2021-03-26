import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Menus extends BaseSchema {
  protected tableName = 'menus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('url').notNullable();
      table.string('icon').nullable();
      table.integer('order').nullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
