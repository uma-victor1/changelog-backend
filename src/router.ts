import { Request, Response, NextFunction } from "express/index";
import validate, {
  ProductSchema,
  UpdateSchema,
  updatePointSchema,
} from "./validations";
import { Router } from "express";

import {
  getAllProducts,
  addProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "./handlers/product";
export const router = Router();

/**
 * product routes
 */
router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.put("/product/:id", validate(ProductSchema), updateProduct);
router.post("/product/", validate(ProductSchema), addProduct);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update");
router.get("/update/:id", () => {});
router.put("/update/:id", validate(UpdateSchema));
router.post("/update/", validate(UpdateSchema));
router.delete("/update/:id");

/**
 * update point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  validate(updatePointSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("updated product");
  }
);
router.post(
  "/updatepoint/",
  validate(updatePointSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("updated product");
  }
);
router.delete("/updatepoint/:id", () => {});

export default router;
