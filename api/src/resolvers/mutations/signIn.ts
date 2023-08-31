import argon2 from "argon2";
import db from "../../db/db.js";

const Mutation = {
    async signIn(_, args, ctx, info) {
        const input = args.input;
        console.log(input)
        // Find user(s) by username or email
        const login = input.username?.includes("@") ? "email" : "username";
        const query = db("users");

        if (login === "email") {
            query.where("email", "=", input.username as string);
            query.orderBy("email_verified", "desc");
            query.orderBy("created_at", "desc");
        } else {
            query.where("username", "=", input.username as string);
        }

        const users = await query.select();

        for (let user of users) {
            if (user.password) {
                if (await argon2.verify(user.password, input.password as string)) {
                    const authPayload = await ctx.signIn(user);
                    return {
                        user: authPayload.user,
                        token: authPayload.accessToken
                    }
                }
            }
        }

        throw new Error("Username or Password incorrect");
    }
};

export default { Mutation }