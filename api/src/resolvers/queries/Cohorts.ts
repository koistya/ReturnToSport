import db from '../../db/db.js';

const Query = {
    /**
     * Gets cohorts
     */
    cohorts: async (parent, args, context, info) => {
        const query = db('cohorts').select("cohorts.*");
            
        return await query
      }
}

export default { Query };
