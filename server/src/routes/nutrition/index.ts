import { db } from "../../db";
import { Router } from "express";
import { MealModel } from "../../models/nutrition";
import { ObjectId } from "bson";
import * as helpers from "../../helpers";

const nutritionRouter = Router();

//------------ADD Meal-----------//

nutritionRouter.post("/nutrition/add-meal", async (req, res) => {
  const { data: mealData } = req.body;

  try {
    if (mealData.type !== MealTypes["Easy meal/Snack"]) {
      const isMealTypeExist = !!(await db.collection("nutrition").findOne({
        "author.uid": req.user.uid,
        "meal.type": mealData.type,
        "meal.date": {
          $gte: helpers.getStartDayDate(mealData.date),
          $lte: helpers.getEndDayDate(mealData.date)
        }
      }));

      if (isMealTypeExist) {
        return res
          .status(400)
          .json(
            `${MealTypes[mealData.type]} on ${helpers.formatDate(
              mealData.date
            )} Already exist`
          );
      }
    }
    mealData.date = helpers.stringToDate(mealData.date);
    const meal = new MealModel({
      author: {
        uid: req.user.uid,
        displayName: req.user.name
      },
      meal: mealData
    });

    await db.collection("nutrition").insertOne(meal);

    return res.status(200).json("Meal Added Successfully");
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json(err.message);
  }
});

//---------- GET Meals ------ //

nutritionRouter.get("/nutrition/get-meals", async (req, res) => {
  const { startAt, endAt } = req.query;

  const start = helpers.getStartDayDate(startAt as string);
  const end = helpers.getEndDayDate(endAt as string);

  try {
    const meals = await db
      .collection("nutrition")
      .aggregate([
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
        { $sort: { "meals.meal.date": -1 } }
      ])
      .toArray();

    return res.json(meals);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("Something went worng while fetching meals");
  }
});

//-------------DELETE Meal----------//

nutritionRouter.delete("/nutrition/delete-meal", async (req, res) => {
  const { docId } = req.query;
  try {
    const doc = await db
      .collection("nutrition")
      .findOne({ _id: new ObjectId(docId as string) });

    if (doc.author.uid !== req.user.uid)
      return res.status(403).json("unauthorized request");

    db.collection("nutrition").deleteOne(doc);

    return res.json("Meal Deleted Successfully");
  } catch (err) {
    console.log(err.stack);
    return res.sendStatus(500);
  }
});

//---------UPDATE Meal---------//
nutritionRouter.put("/nutrition/update-meal", (req, res) => {});

enum MealTypes {
  Breakfast,
  Lunch,
  Dinner,
  "Easy meal/Snack"
}

export default nutritionRouter;
