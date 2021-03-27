import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('first_name', 64).notNullable();
      table.string('last_name', 180).notNullable();
      table.string('email', 255).notNullable();
      table.string('cpf', 32).notNullable();
      table.string('password', 180).notNullable();
      table.string('avatar_url', 255).defaultTo('/uploads/images/default/default_avatar.png');
      table.date('birth_date').nullable();
      table.string('phone_number', 32).nullable();
      table.string('remember_me_token').nullable();
      table.integer('gender_id');
      
      table.boolean('pending_approval').defaultTo(false);
      table.boolean('approved').defaultTo(true);
      
      table.foreign('gender_id').references('id').inTable('genders');
      
      table.boolean('active').defaultTo(true);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps(true);

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
