// migrations/01_users_and_cohorts.js

exports.up = async function(knex) {
    await knex.schema.createTable('cohorts', table => {
      table.increments('id').primary();
      table.string('title').notNullable(); // Title of the cohort
      table.text('description'); // Description for the cohort
      table.date('startDate');  // Effective start date
      table.date('endDate');    // Effective end date
      table.string('month');    // Month flag
      table.integer('year');    // Year flag
    });
  
    await knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string("name", 50);
      table.string('email').notNullable().unique();
      table.boolean("email_verified").notNullable().defaultTo(false);
      table.string('password').notNullable(); 
      table.string('avatarUrl');
      table.timestamp("last_login");
      table.timestamps(true, true);
      table.timestamp("deleted_at");
    });
  
    await knex.schema.createTable('user_cohorts', table => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.integer('cohort_id').references('id').inTable('cohorts').notNullable();
      table.unique(['user_id', 'cohort_id']); // Ensure unique pairings
    });
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('user_cohorts');
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('cohorts');
  }
  