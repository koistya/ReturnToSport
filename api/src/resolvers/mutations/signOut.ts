const Mutation = {
    async signOut(_, args, ctx, info) {
       ctx.signOut();
    }
};

export default { Mutation }