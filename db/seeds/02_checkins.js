// seeds/03_physical_therapy_checkins_seed.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('therapy_checkins').del();

  // Assuming you have already seeded the 'users' table with users 'alice123' and 'bob456',
  // Retrieve their IDs
  const alice = await knex('users').where('username', 'dhalla').first();
  const bob = await knex('users').where('username', 'bob456').first();

  // Seed the therapy_checkins table
  await knex('therapy_checkins').insert([
    {
      user_id: alice.id,
      notes: "Felt a bit of pain during the session but managed to complete all exercises."
    },
    {
      user_id: alice.id,
      checkin_time: '2023-09-05 10:30:00', // Specifying a custom check-in time
      notes: "Better than yesterday. Used lighter weights."
    },
    {
      user_id: bob.id,
      checkin_time: '2023-09-06 11:00:00',
      notes: "Therapy went well. Practiced walking for an extended period."
    }
    // Add more therapy check-in seeds if needed
  ]);
}
