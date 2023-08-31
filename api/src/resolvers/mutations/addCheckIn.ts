import db from "../../db/db.js";

const Mutation = {
    async addCheckIn(_, { input }, ctx) {
      if (!ctx.user) throw new Error("Unauthenticated");
      console.log(ctx.user.id)
      try {
        const therapyCheckIn = await db('therapy_checkins')
        .insert({
            user_id: ctx.user.id,
            notes: input.notes
          })
        .returning('therapy_checkins.*')
        
        return therapyCheckIn[0] ;
      } catch (error) {
        return {
          success: false,
          message: error.message
        };
      }
    }
  };

  export default { Mutation }