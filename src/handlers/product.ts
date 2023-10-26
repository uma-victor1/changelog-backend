import prisma from "../db";
import { Req } from "../modules/auth";

export const getAllProducts = async (req: Req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.user.username,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};
