import { db } from "../../db";
import { Router } from "express";
import { MealModel } from "../../models/food";
import { ObjectId } from "bson";
import moment from "moment";

const foodRouter = Router();

foodRouter.post("/food/add-meal", async (req, res) => {
  const { data: mealData } = req.body;

  const isMealTypeExist = await db.collection("food").findOne({
    "author.uid": req.user.uid,
    "meal.type": mealData.type,
    "meal.date": {
      $gte: moment(mealData.date).startOf("D").toDate(),
      $lte: moment(mealData.date).endOf("D").toDate()
    }
  });

  mealData.date = moment(mealData.date).toDate();

  if (isMealTypeExist && mealData.type !== MealTypes["Easy meal/Snack"]) {
    return res
      .status(400)
      .json(
        `${MealTypes[mealData.type]} on ${moment(mealData.date).format(
          "DD/MM/YYYY"
        )} Already exist`
      );
  }

  try {
    const meal = new MealModel({
      author: {
        uid: req.user.uid,
        displayName: req.user.name
      },
      meal: mealData
    });
    await db.collection("food").insertOne(meal);
    return res.status(200).json("Meal Added Successfully");
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json(err.message);
  }
});

foodRouter.get("/food/get-meals", async (req, res) => {
  const { startAt, endAt } = req.query;

  const start = moment(startAt as string)
    .startOf("day")
    .toDate();

  const end = moment(endAt as string)
    .endOf("day")
    .toDate();

  try {
    const meals = db.collection("food").aggregate([
      {
        $match: {
          $and: [
            {
              "meal.date": { $gte: start, $lte: end }
            },
            { "author.uid": req.user.uid }
          ]
        }
      },

      {
        $group: {
          _id: {
            $dateToString: {
              format: "%d/%m/%Y",
              date: "$meal.date"
            }
          },
          meals: { $push: { meal: "$meal", id: "$_id" } }
        }
      },
      { $sort: { _id: -1 } }
    ]);

    const parsedMeals = await meals.toArray();

    return res.json(parsedMeals);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("Something went worng while fetching meals");
  }
});

foodRouter.delete("/food/delete-meal", async (req, res) => {
  const { docId } = req.query;
  try {
    const doc = await db
      .collection("food")
      .findOne({ _id: new ObjectId(docId as string) });

    if (doc.author.uid !== req.user.uid)
      return res.status(403).json("unauthorized request");

    db.collection("food").deleteOne(doc);

    return res.json("Meal Deleted Successfully");
  } catch (err) {
    console.log(err.stack);
    return res.sendStatus(500);
  }
});

foodRouter.put("/food/update-meal", (req, res) => {});

enum MealTypes {
  Breakfast,
  Lunch,
  Dinner,
  "Easy meal/Snack"
}

export default foodRouter;
