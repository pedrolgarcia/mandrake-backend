import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Countries extends BaseSchema {
  protected tableName = 'countries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('iso', 2).notNullable();
      table.string('iso_3', 3).nullable();
      table.string('name', 64).notNullable();
      
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
