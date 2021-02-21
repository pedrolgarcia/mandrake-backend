import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Adresses extends BaseSchema {
  protected tableName = 'adresses'

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

      table.integer('country_id').unsigned().references('id').inTable('countries');
      table.integer('state_id').unsigned().references('id').inTable('states');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('company_id').unsigned().references('id').inTable('companies').onDelete('CASCADE');

      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
