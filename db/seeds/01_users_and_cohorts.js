// seeds/01_users_and_cohorts_seed.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_cohorts').del();
  await knex('users').del();
  await knex('cohorts').del();

  // Seed the cohorts table
  const cohortIds = await knex('cohorts').insert([
    {
      title: 'Cohort September 2023',
      description: 'A cohort for those who underwent surgery in September 2023',
      startDate: '2023-09-01',
      endDate: '2023-09-30',
      month: 'September',
      year: 2023
    },
    {
      title: 'Cohort October 2023',
      description: 'A cohort for those who underwent surgery in October 2023',
      startDate: '2023-10-01',
      endDate: '2023-10-31',
      month: 'October',
      year: 2023
    }
    // Add more cohort seeds if needed
  ]).returning('id');

  // Seed the users table
  const userIds = await knex('users').insert([
    {
      username: 'dhalla',
      email: 'dylanhallagan@msn.com',
      password: 'password123',  // In real-life, always store hashed passwords
      avatarUrl: 'https://avatar.example.com/alice.jpg'
    },
    {
      username: 'bob456',
      email: 'bob@example.com',
      password: 'password456',  // In real-life, always store hashed passwords
      avatarUrl: 'https://avatar.example.com/bob.jpg'
    }
    // Add more user seeds if needed
  ]).returning('id');

  // Seed the user_cohorts table to establish the relationship between users and cohorts
  await knex('user_cohorts').insert([
    {
      user_id: userIds[0].id,      // alice123
      cohort_id: cohortIds[0].id   // Cohort September 2023
    },
    {
      user_id: userIds[1].id,      // bob456
      cohort_id: cohortIds[1].id   // Cohort October 2023
    }
    // Add more user_cohort seeds if needed
  ]);
}
