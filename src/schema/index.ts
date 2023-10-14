import { z, AnyZodObject, Schema } from "zod";
import { Request, Response, NextFunction } from "express/index";
import { UPDATE_STATUSES } from "@prisma/client";

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
    title: z.string().optional(),
    body: z.string().optional(),
    status: z.nativeEnum(UPDATE_STATUSES),
    version: z.string().optional(),
  }),
});

export const validate =
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
