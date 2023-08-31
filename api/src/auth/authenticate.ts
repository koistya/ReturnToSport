import db from "../db/db.js";
import jwt from "jsonwebtoken";

const getUser = async (req) => {
  const accessToken = req.get("authorization")?.substring(7);

    if (accessToken) {
      try {
        const token = jwt.verify(accessToken, process.env.JWT_SECRET, {
          issuer: process.env.APP_HOSTNAME,
          audience: process.env.APP_NAME,
        }) as { sub: string };
        const user = await db.table("users").where({ id: token.sub }).first();
        return user || null;
      } catch (err) {
        console.error(err);
      }
    }

    return null;
  };
  
  const signIn = async (req, res, user) => {
    if (!user) {
      return null;
    }
  
    [user] = await db("users")
      .where({ id: user.id })
      .update({ last_login: db.fn.now() })
      .returning("*");
  
    if (!user) {
      req.user = null;
      return null;
    }
  
    const accessToken = jwt.sign({}, process.env.JWT_SECRET, {
      issuer: process.env.APP_HOSTNAME,
      audience: process.env.APP_NAME,
      subject: String(user.id),
      expiresIn: 1200000,
    });
    
    const authPayload = {
      user,
      accessToken
    }
    req.user = user;
    return authPayload
  };
  
  const signOut = (req, res) => {
    req.user = null;
  };

  const authenticate = async ({ req, res }) => {
    try {
        const user = await getUser(req);
        if (req.query.authorize !== undefined && !user) {
            throw new Error('Unauthorized!');
        }
        return {
            user,
            signIn: signIn.bind(undefined, req, res),
            signOut: signOut.bind(undefined, req, res)
        };
    } catch (err) {
        console.error(err);
        throw new Error('Authentication error');
    }
};

  
  export {
    authenticate,
    signIn,
    signOut
  };