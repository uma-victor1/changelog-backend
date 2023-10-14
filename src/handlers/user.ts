import prisma from "../db";
import { createJWT, hashPassword, comparePassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const { username, password } = req.body;

  /**
   * check for user
   */
  if (!username || !password) {
    res.status(400).json({ message: "username and password is missing" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: await hashPassword(password),
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  const isValid = comparePassword(password, user.password);

  const token = createJWT(user);

  if (isValid) {
    res.send({ token });
  } else {
    res.status(401);
    res.send({ message: "invalid token" });
    return;
  }
};
