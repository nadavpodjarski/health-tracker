import express from "express";
import cors from "cors";
import admin, { ServiceAccount } from "firebase-admin";
import { api } from "./api";

import { middleware } from "./middleware";

import serviceAccount from "../secrets/firebase-service-account.json";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

app.use(express.json());
app.use(cors());

app.use(middleware.apiRateLimiter);
app.use(middleware.FBAuth);

app.use("/api", api);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
