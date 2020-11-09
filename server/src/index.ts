import express from "express";
import cors from "cors";
import helmet from "helmet";

import { api } from "./api";
import { middleware } from "./middleware";

import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../secrets/firebase-service-account.json";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(middleware.apiRateLimiter);
app.use(middleware.firebaseAuth);

app.use("/api", api);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
