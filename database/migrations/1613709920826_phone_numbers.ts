import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PhoneNumbers extends BaseSchema {
  protected tableName = 'phone_numbers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title', 64).notNullable();
      table.string('number', 32).notNullable();
      table.string('area_code', 5).nullable();
      table.string('country_code', 5).nullable();
      table.string('type', 64).nullable();
      table.integer('user_id');

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');

      table.boolean('active').defaultTo(true);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
