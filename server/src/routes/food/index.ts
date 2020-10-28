import { db } from "../../db";
import { Router } from "express";
import { MealModel } from "../../models/food";
import { ObjectId } from "bson";

const foodRouter = Router();

foodRouter.post("/food/add-meal", async (req: any, res) => {
  const { data: mealData } = req.body;

  try {
    const meal = new MealModel({
      author: {
        uid: req.user.uid,
        displayName: req.user.name
      },
      meal: mealData
    });
    await db.collection("food").insertOne(meal);
    res.json("Meal Added Successfully");
  } catch (err) {
    console.log(err.stack);
    res.sendStatus(500);
  }
});

foodRouter.get("/food/get-meals", async (req: any, res) => {
  const { startAt, endAt } = req.query;

  try {
    const meals = db.collection("food").aggregate([
      {
        $match: {
          $and: [
            {
              "meal.date": { $gte: startAt, $lte: endAt }
            },
            { "author.uid": req.user.uid }
          ]
        }
      },
      {
        $group: {
          _id: "$meal.date",
          meals: { $push: { meal: "$meal", id: "$_id" } }
        }
      },
      { $sort: { _id: -1 } }
    ]);

    return res.json(await meals.toArray());
  } catch (err) {
    res.sendStatus(500);
    console.log(err.stack);
  }
});

foodRouter.delete("/food/delete-meal", async (req: any, res) => {
  const { docId } = req.query;
  try {
    const doc = await db
      .collection("food")
      .findOne({ _id: new ObjectId(docId as string) });

    if (doc.author.uid !== req.user.uid)
      res.status(403).json({ err: "Doc not verified" });

    db.collection("food").deleteOne(doc);

    res.json("Meal Deleted Successfully");
  } catch (err) {
    res.sendStatus(500);
    console.log(err.stack);
  }
});

foodRouter.put("/food/update-meal", (req, res) => {});

export default foodRouter;
