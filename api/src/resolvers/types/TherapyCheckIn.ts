import { getUserById } from '../../dataSources/UserDataSource.js';

const TherapyCheckIn = {
    user: async (parent, args, context) => {
      return await getUserById(parent.user_id);
    }
};

const DailyCheckIns = {
  user: async (parent, args, context) => {
    return await getUserById(parent.user_id);
  }
};

export default { TherapyCheckIn, DailyCheckIns };
