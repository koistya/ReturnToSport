module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'returntosnow_local'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
  // ... you can also add configurations for "production", "staging", etc.
};