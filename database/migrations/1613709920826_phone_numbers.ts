import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PhoneNumbers extends BaseSchema {
  protected tableName = 'phone_numbers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title', 64).notNullable();
      table.string('number', 32).notNullable();
      table.string('ddd', 5).nullable();
      table.string('country_code', 5).nullable();
      table.string('type', 64).notNullable();

      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');

      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
