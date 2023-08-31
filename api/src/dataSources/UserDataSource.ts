// services/checkInService.js
import db from '../db/db.js';

export const getUserById = async (id) => {
  return await db('users')
    .where('users.id', id)
    .first('*');
};
