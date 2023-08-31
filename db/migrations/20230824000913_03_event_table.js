// migrations/03_events_table.js

exports.up = async function(knex) {
  // Common columns are duplicated across all post tables.

  await knex.schema.createTable('events', table => {
    table.increments('id').primary();
    table.integer('author_id').references('id').inTable('users').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.timestamp('eventDate').notNullable();
  });
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('events');
}