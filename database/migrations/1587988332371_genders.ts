import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Genders extends BaseSchema {
  protected tableName = 'genders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 64).notNullable()
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
