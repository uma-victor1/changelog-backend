import { Request, Response, NextFunction } from "express/index";
import { validate, ProductSchema, UpdateSchema } from "./schema";
import { Router } from "express";

const router = Router();

/**
 * product routes
 */
router.get("/product", (req: Request, res: Response, next: NextFunction) => {
  res.statusCode = 200;
  res.status(200);

  res.json({ message: "hello" });
});
router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  validate(ProductSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("added");
  }
);
router.post(
  "/product/",
  validate(ProductSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("added product");
  }
);
router.delete("/product/:id", () => {});

/**
 * Update
 */

router.get("/update");
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post(
  "/update/",
  validate(UpdateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("updated product");
  }
);
router.delete("/update/:id", () => {});

/**
 * update point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
