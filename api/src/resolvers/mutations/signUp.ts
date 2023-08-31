import argon2 from "argon2";
import db from "../../db/db.js";
import jwt from "jsonwebtoken";

const Mutation = {
    async signUp(_, args, ctx, info) {
        const { email, username, password } = args;
        const dryRun = args.dryRun as boolean;

        const hashedPassword = await argon2.hash(password);
       
        const exists = await db("users")
        .where({ username: username })
        .whereNot("id", null)
        .first("id")
        .then((x) => Boolean(x));

        if (exists) {
            throw new Error("Username already exists");
        }

        if (dryRun) return { user: null };

        const [user] = await db("users")
        .insert({ username, password: hashedPassword, email })
        .returning("*");

        console.log(user)

        const token = jwt.sign({ userId: user?.id }, process.env.JWT_SECRET);

        return { token, user: user };
    }
};

export default { Mutation }