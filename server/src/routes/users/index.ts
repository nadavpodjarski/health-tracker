import { Router } from "express";
import { UserModel } from "../../models/users";
import { db } from "../../db";

const usersRouter = Router();

usersRouter.post("/add-user", async (req: any, res) => {
  const isUserExists = await db
    .collection("users")
    .findOne({ email: req.user.email });

  if (!isUserExists) {
    const user = new UserModel({
      email: req.user.email,
      displayName: req.user.name,
      uid: req.user.uid,
      picture: req.user.picture
    });

    await db.collection("users").insertOne(user);
  }

  const sanitizedUser = {
    email: req.user.email,
    displayName: req.user.name,
    picture: req.user.picture
  };

  res.json(sanitizedUser);
});

export default usersRouter;
