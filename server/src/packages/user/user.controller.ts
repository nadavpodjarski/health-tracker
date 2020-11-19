import { Request, Response } from "express";
import { User } from "./user.model";

export const addUser = async (req: Request, res: Response) => {
  const { email } = req?.user;
  try {
    let user: any = await User.findOne({ email });
    if (!user) {
      const newUser = new User(req.user);
      user = await newUser.save();
    }

    const sanitizedUser = {
      email: user.email,
      displayName: user.displayName,
      picture: user.picture
    };

    res.json(sanitizedUser);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ message: err.message });
  }
};
