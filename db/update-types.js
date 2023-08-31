const { knex } = require("knex");
const { updateTypes } = require("knex-types");
// const db = knex(require("./knexfile"));
const db = {
  client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'ReturnToSport'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

updateTypes(db, { output: "./types.ts" }).catch(err => {
  console.error(err);
  process.exit(1);
});
