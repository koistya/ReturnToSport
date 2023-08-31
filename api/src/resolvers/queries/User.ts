import { getUserById } from '../../dataSources/UserDataSource.js';
import db from '../../db/db.js';

const Query = {
    /**
     * Gets User by username or email
     */
    user: async (root, args, { User }) => {
        const query = db('users')
    
        if (args.username) {
            query.where("username", "=", args.username);
        } else if (args.email) {
            query.where("email", "=", args.email);
        } else {
            throw new Error("The username argument is required.");
        }

        return query.first();
    }
}

export default { Query };