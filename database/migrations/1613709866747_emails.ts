import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Emails extends BaseSchema {
  protected tableName = 'emails'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title', 108).notNullable();
      table.string('email', 108).notNullable();
      table.string('type', 64).nullable();
      table.integer('user_id');

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
