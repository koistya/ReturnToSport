// migrations/04_polls.js

exports.up = async function(knex) {
  // Common columns are duplicated across all post tables.

  await knex.schema.createTable('polls', table => {
    table.increments('id').primary();
    table.integer('author_id').references('id').inTable('users').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('question').notNullable();
  });

  await knex.schema.createTable('poll_options', table => {
    table.increments('id').primary();
    table.string('text').notNullable();
    table.integer('votes').defaultTo(0);
    table.integer('poll_id').references('id').inTable('polls').notNullable();
  });
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('poll_options');
  await knex.schema.dropTableIfExists('polls');
}