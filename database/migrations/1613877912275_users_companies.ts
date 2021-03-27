import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersCompanies extends BaseSchema {
  protected tableName = 'users_companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('company_id');
      
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE');
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
