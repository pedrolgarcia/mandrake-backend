import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('company_name', 180).notNullable();
      table.string('trading_name', 180).notNullable();
      table.string('cnpj', 255).notNullable();
      table.string('email', 180).nullable();
      table.string('logo_url', 255).defaultTo('/uploads/images/default/default_company.png');
      table.text('description').nullable();
      table.integer('foundation_year', 5).nullable();
      
      table.boolean('pending_approval').defaultTo(false);
      table.boolean('approved').defaultTo(true);

      table.boolean('active').defaultTo(true);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
