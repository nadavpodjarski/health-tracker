import { Router } from "express";

import userRouter from "./routes/users";
import nutritionRouter from "./routes/nutrition";

export const api = Router();

api.use("/nutrition", nutritionRouter);
api.use("/", userRouter);
