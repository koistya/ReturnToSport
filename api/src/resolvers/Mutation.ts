import argon2 from "argon2";
import jwt from "jsonwebtoken";
// import db, { User } from "../db";
// import env from "../env"; 
// import { validate, ValidationError } from "../utils";


export const Mutation = {
  // login: (parent, args, context) => {
  //   // Your implementation for the login mutation
  //   console.log(args)
  //   return {user: users[0], token: 'test' }
  // },

  resetPassword: (parent, args, context) => {
    // Your implementation for the resetPassword mutation
  },

  // signIn: async (parent, args, ctx) => {
  //   // Extracted from the provided code
  //   // Your signIn implementation here
  // },

  signOut: (parent, args, ctx) => {
    // Your signOut implementation here
  },

  // Any other mutation resolvers you might have
};
