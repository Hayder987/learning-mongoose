import express, { Request, Response } from "express";
import { User } from "../models/users.models";
import { z } from "zod";

export const userRouter = express.Router();

const userZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),      
  age: z.number(),
  role: z.string().optional(),
  address: z.object({
    city: z.string(),
    road: z.string(),
    zip: z.number(),
  }),
});


userRouter.post("/add-user", async (req: Request, res: Response) => {
  try {
    const body = await userZodSchema.parseAsync(req.body);
    const user = await User.create(body);

    res.status(201).json({
      status: true,
      message: "user added successfully",
      user,
    });
  } catch (error:any) {
    res.status(404).json({
      status: true,
      message: error.message,
      error
    });
    console.log(error)
  }
});

userRouter.get("/all-users", async (req: Request, res: Response) => {
  const user = await User.find();

  res.status(201).json({
    status: true,
    message: "user get successfully",
    user,
  });
});

userRouter.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  res.status(201).json({
    status: true,
    message: "user get successfully",
    user,
  });
});

userRouter.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const body = req.body;
  const user = await User.findByIdAndUpdate(userId, body, { new: true });

  res.status(201).json({
    status: true,
    message: "user update successfully",
    user,
  });
});

userRouter.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);

  res.status(201).json({
    status: true,
    message: "user update successfully",
    user,
  });
});
