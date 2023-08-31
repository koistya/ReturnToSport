// migrations/03_physical_therapy_checkins.js

exports.up = async function(knex) {
    await knex.schema.createTable('therapy_checkins', table => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.timestamp('checkin_time').defaultTo(knex.fn.now()); // time of check-in
      table.text('notes').nullable(); // optional notes about the therapy session or any additional information the user might want to add
    });
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('therapy_checkins');
  }
  