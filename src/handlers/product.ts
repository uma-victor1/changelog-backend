import prisma from "../db";
import { Req } from "../modules/auth";

export const getAllProducts = async (req: Req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// get product by Id
export const getProductById = async (req: Req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: product });
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

// create a product
export const addProduct = async (req: Req, res) => {
  const { name } = req.body;

  try {
    const prod = await prisma.product.create({
      data: {
        name: name,
        belongsToId: req.user.id,
      },
    });

    res.json({ data: prod });
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

// delete product
export const deleteProduct = async (req: Req, res) => {
  try {
    const response = prisma.product.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: response });
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

// update product

export const updateProduct = async (req: Req, res) => {
  try {
    const { name } = req.body.name;
    const response = prisma.product.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: name,
      },
    });
    res.json({ data: response });
  } catch (error) {}
};
