import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import fs from 'fs';
import chalk from "chalk";
import resolvers from './resolvers/index.js';
import express from 'express';
import { authenticate } from './auth/authenticate.js';
import typeDefs from './schema.js';
 
const environment = process.env.APP_ENV || 'local';
const envPath = `../env/.${environment}.env`;

dotenv.config({path: envPath });

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers
});

const port = process.env.PORT ?? 4000;
const envName = chalk.greenBright(process.env.APP_ENV);
const dbName = chalk.greenBright(process.env.PGDATABASE);
const jwtSecret = chalk.greenBright(process.env.JWT_SECRET);
//   const url = chalk.blueBright(`http://localhost:${port}/`);

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    return await authenticate({ req, res });
  },
  listen: { port: 4000 }
});
  
console.log(`Listening on ${url} (env: ${envName}, db: ${dbName}, jwt: ${jwtSecret})`);
