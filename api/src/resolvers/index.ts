import _ from 'lodash';
import user from './queries/User.js';
import checkIn from './queries/CheckIn.js';
import therapyCheckIn from './types/TherapyCheckIn.js';
import cohorts from './queries/Cohorts.js';
import addCheckIn from './mutations/addCheckIn.js';
import signIn from './mutations/signIn.js';
import signUp from './mutations/signUp.js';
import signOut from './mutations/signOut.js';
import me from './queries/Me.js'
import dailyCheckIns from './queries/DailyCheckIns.js';

const resolvers = _.merge(
  {}, 
  addCheckIn,
  checkIn,
  cohorts,
  dailyCheckIns,
  therapyCheckIn,
  me,
  user,
  signIn,
  signUp,
  signOut
);

export default resolvers;