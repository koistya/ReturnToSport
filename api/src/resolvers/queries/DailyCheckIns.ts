
import { getCheckInsByDay } from '../../dataSources/CheckInDataSource.js';
import { getCheckInsForCohort } from '../../dataSources/CohortDataSource.js';
import db from '../../db/db.js';


const Query = {
  dailyCheckIns: async (_, { date }) => {

    const checkIns = await db('therapy_checkins')
    .whereRaw('DATE(checkin_time) = ?', [date])
    
    .count('user_id as checkInCount')
    .select('user_id')
    .groupBy('user_id')
    .orderBy('checkInCount', 'desc');

    return checkIns
  },
  // checkInsForCohort: async (parent, { cohortId }, context, info) => {
  //   return await getCheckInsForCohort(cohortId);
  // },
};
export default { Query };