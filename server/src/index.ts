import express from "express";
import cors from "cors";
import admin, { ServiceAccount } from "firebase-admin";
import userRouter from "./routes/users";
import foodRouter from "./routes/food";
import { FBAuth } from "./middlware/firebase-auth";
import serviceAccount from "../secrets/firebase-service-account.json";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

app.use(express.json());
app.use(cors());

app.use("/api", FBAuth, [userRouter, foodRouter]);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
