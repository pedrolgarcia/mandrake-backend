import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notifications extends BaseSchema {
  protected tableName = 'notifications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title', 108).notNullable();
      table.string('content').notNullable();
      table.string('link').nullable();
      table.boolean('readed').defaultTo(false);
      table.json('data').nullable();
      table.integer('sender_id');
      table.integer('receiver_id');
      
      table.foreign('sender_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('receiver_id').references('id').inTable('users').onDelete('CASCADE');

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
