// migrations/02_post_tables.js

exports.up = async function(knex) {
  // Common columns are duplicated across all post tables.

  await knex.schema.createTable('posts', table => {
    table.increments('id').primary();
    table.integer('author_id').references('id').inTable('users').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.text('content').notNullable();
    table.string('imageUrl').notNullable();
    table.string('videoUrl').notNullable();
    table.string('caption');

  });
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('posts');
}