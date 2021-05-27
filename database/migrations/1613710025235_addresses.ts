import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Adresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('address').notNullable();
      table.string('cep').notNullable();
      table.string('number').nullable();
      table.string('complement').nullable();
      table.string('district').notNullable();
      table.string('city').notNullable();
      table.string('latitude').nullable();
      table.string('longitude').nullable();
      table.integer('country_id');
      table.integer('state_id');
      table.integer('user_id');
      table.integer('company_id');

      table.foreign('country_id').references('id').inTable('countries');
      table.foreign('state_id').references('id').inTable('states');
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE');

      table.boolean('active').defaultTo(true);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
