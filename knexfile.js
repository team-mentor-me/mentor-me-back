// knex migrate:latest --env production || development

require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;

// replace with heroku credentials to run local pg database
const localPgConnection = {
  host: 'localhost',
  database: 'db',
  user: 'user',
  password: 'password'
};

// run on development and projection, if no production run on local
const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/testing.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
