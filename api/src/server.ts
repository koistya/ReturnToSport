import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import fs from 'fs';
import chalk from "chalk";
import resolvers from './resolvers/index.js';
import express from 'express';
import { authenticate } from './auth/authenticate.js';

dotenv.config();

const typeDefs = `#graphql
scalar DateTime

type User {
  id: ID!
  username: String!
  email: String!
  avatarUrl: String
  name: String
}


type Auth {
    token: String
    user: User!
}

input ResetPasswordInput {
    email: String!
    oldPassword: String!
    newPassword: String!
}

type Query {
    me: User!
}

type Mutation {
    signIn(input: SignInInput!): Auth!
    resetPassword(input: ResetPasswordInput!): Boolean!
    signOut: String
}

type SignInPayload {
  user: User
  accessToken: String
}

input SignInInput {
  username: String
  password: String
}

input SignUpInput {
  username: String
  password: String
  email: String
}

type SignInPayload {
  user: User
  token: String
}

type Cohort {
  id: ID!
  title: String!
  description: String
  startDate: String
  endDate: String
  month: String
  year: Int
  users: [User!]!
}


type TherapyCheckIn {
  id: ID!
  user_id: Int!
  user: User
  checkin_time: String!
  notes: String
}

type Query {
  user(id: ID!): User
  user(username: String, email: String): User
  users: [User!]!
  cohort(id: ID!): Cohort
  cohorts: [Cohort!]!
  therapyCheckinsByDate(date: String!): [TherapyCheckIn!]!
  checkIn(date: String!): [TherapyCheckIn]
}

input CheckInInput {
  notes: String
}

type Mutation {
  createUser(username: String!, email: String!, password: String!, avatarUrl: String): User!
  addCheckIn(input: CheckInInput!): TherapyCheckIn!
  signUp(username: String!, email: String!, password: String!): AuthPayload!
}

type AuthPayload {
    token: String!
    user: User!
}

type DailyCheckIns {
  user: User
  checkInCount: Int
}

type Query {
  dailyCheckIns(date: String!): [DailyCheckIns]
}
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
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