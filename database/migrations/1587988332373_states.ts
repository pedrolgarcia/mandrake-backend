import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class States extends BaseSchema {
  protected tableName = 'states'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('iso', 2).notNullable();
      table.string('name', 108).notNullable();

      table.integer('country_id').unsigned().references('id').inTable('countries');

      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
