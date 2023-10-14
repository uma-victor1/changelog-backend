import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 * Handling password hashing
 * @param password user password
 * @returns
 */

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

/**
 * Compare password and hash
 * @param password
 * @param hash
 */

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },

    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "unauthorized user. Please login" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      res.status(401);
      res.json({ message: "wrong user" });
    } else {
      next();
    }
  } catch (e) {
    res.status(400);
    res.json({ error: "jwt error " + e });
  }
};
