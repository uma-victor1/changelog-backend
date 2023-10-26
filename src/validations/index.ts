import { z, AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express/index";

export const userSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required" })
      .min(2)
      .max(20),
    password: z.string().min(8),
  }),
});

export type user = z.infer<typeof userSchema>["body"];
export type User = {
  user: user;
};

export const ProductSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Full name is required",
      })
      .min(3),
  }),
});

export const UpdateSchema = z.object({
  body: z.object({
    title: z.string(),
    body: z.string().optional(),
    status: z
      .enum(["IN_PROGRESS", "SHIPPED", "DEPRECATED"])
      .default("IN_PROGRESS"),
    version: z.string().optional(),
    asset: z.string().min(5).optional(),
  }),
});

export const updatePointSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    description: z.string().min(15).max(300).optional(),
  }),
});

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
export default validate;
