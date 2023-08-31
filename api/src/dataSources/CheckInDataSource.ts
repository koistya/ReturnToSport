// services/checkInService.js
import db from '../db/db.js';

export const getCheckInsByDay = async (date) => {
    return await db('therapy_checkins')
      .whereRaw('DATE(checkin_time) = ?', [date])
      .select('*');
};
