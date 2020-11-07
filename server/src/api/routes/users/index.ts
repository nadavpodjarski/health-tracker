import { Router } from "express";
import { UserModel } from "../../../models/users";
import { db } from "../../../db";

const usersRouter = Router();

usersRouter.post("/add-user", async (req, res) => {
  let user = await db.collection("users").findOne({ email: req.user.email });

  if (!user) {
    const newUser = new UserModel({
      email: req.user.email,
      displayName: req.user.name,
      uid: req.user.uid,
      picture: req.user.picture
    });

    user = (await db.collection("users").insertOne(newUser)).ops;
  }

  const sanitizedUser = {
    email: user.email,
    displayName: user.displayName,
    picture: user.picture
  };

  res.json(sanitizedUser);
});

export default usersRouter;
