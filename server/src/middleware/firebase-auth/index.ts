import admin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

export const firebaseAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["authorization"])
    return res.status(403).json("unauthorized request");

  const authHeader = req.headers["authorization"].split(" ");
  if (authHeader[0] !== "Bearer")
    return res.status(400).json("unable to process request");

  admin
    .auth()
    .verifyIdToken(authHeader[1])
    .then((user) => {
      req.user = {
        email: user.email,
        displayName: user.name,
        uid: user.uid,
        picture: user.picture
      };
      return next();
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};
