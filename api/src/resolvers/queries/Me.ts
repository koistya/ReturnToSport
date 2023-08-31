import { ValidationContext } from "graphql";

const Query = {
    /**
     * The authenticated user
     */
    me: async (root, args, ctx) => {
        if (ctx.user) {
            return ctx.user;
        } else {
            throw new Error('You are not authenticated!');
        }
    }
}

export default { Query };