import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
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

export const api = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

const port = process.env.PORT ?? 4000;
const envName = chalk.greenBright(process.env.APP_ENV);
const dbName = chalk.greenBright(process.env.PGDATABASE);
const jwtSecret = chalk.greenBright(process.env.JWT_SECRET);

api.use('/api', cors(), json(), expressMiddleware(server, {
  context: async ({ req, res }) => {
    return await authenticate({ req, res });
  }
}));
  
console.log(`Listening on http://localhost:4000 (env: ${envName}, db: ${dbName}, jwt: ${jwtSecret})`);
