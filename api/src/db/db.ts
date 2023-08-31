// db.js
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'postgres',
        database : 'returntosnow_local'
    },
});

export default db;
