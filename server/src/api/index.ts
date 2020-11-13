import { Router } from "express";

import userRouter from "./routes/users";
import nutritionRouter from "./routes/nutrition";
import symptomRouter from "./routes/symptoms";

export const api = Router();

api.use("/nutrition", nutritionRouter);
api.use("/symptoms", symptomRouter);
api.use("/", userRouter);
