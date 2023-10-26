import { Request, Response, NextFunction } from "express/index";
import validate, {
  ProductSchema,
  UpdateSchema,
  updatePointSchema,
} from "./validations";
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
router.put(
  "/update/:id",
  validate(UpdateSchema),
  (req: Request, res: Response, next: NextFunction) => {
    res.send("updated product");
  }
);
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
