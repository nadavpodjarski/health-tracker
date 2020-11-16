import { db } from "../../../db";
import { Router } from "express";
import { MealModel } from "../../../models/nutrition";
import { ObjectId } from "bson";
import * as helpers from "../../../helpers";
import * as _ from "lodash";
const nutritionRouter = Router();

//------------ADD Meal-----------//

nutritionRouter.post("/add-meal", async (req, res) => {
  const { data: mealData } = req.body;

  if (_.isEmpty(mealData))
    return res.status(400).json("Unable To Proccess Request");

  try {
    // Check for existing type
    if (mealData.type !== MealTypes["Easy meal/Snack"]) {
      const isMealTypeExist = !!(await db.collection("nutrition").findOne({
        "author.uid": req.user?.uid,
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
        uid: req.user?.uid,
        displayName: req.user?.name
      },
      meal: mealData
    });

    const result = await db.collection("nutrition").insertOne(meal);

    return res
      .status(200)
      .json({ message: "Meal Added Successfully", meal: result.ops });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an error while adding meal");
  }
});

//---------- GET Meals ------ //

nutritionRouter.get("/get-meals", async (req, res) => {
  const { startAt, endAt } = req.query;

  if (!startAt || !endAt)
    return res.status(400).json("Unable To Proccess Request");

  try {
    const start = helpers.getStartDayDate(startAt as string);
    const end = helpers.getEndDayDate(endAt as string);

    const meals = await db
      .collection("nutrition")
      .aggregate([
        {
          $match: {
            $and: [
              {
                "meal.date": { $gte: start, $lte: end }
              },
              { "author.uid": req.user?.uid }
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
    return res.status(500).json("There was an Error while fetching meals");
  }
});

//-------------DELETE Meal----------//

nutritionRouter.delete("/delete-meal", async (req, res) => {
  const { docId } = req.query;

  if (!docId || typeof docId !== "string")
    return res.status(400).json("Unable To Proccess Request");

  try {
    const doc = await db
      .collection("nutrition")
      .findOne({ _id: new ObjectId(docId) });

    if (doc.author.uid !== req.user?.uid)
      return res.status(403).json("unauthorized request");

    await db.collection("nutrition").deleteOne(doc);

    return res.json({ message: "Meal Deleted Successfully", docId: docId });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while deleting meal");
  }
});

//---------UPDATE Meal---------//

nutritionRouter.put("/edit-meal", async (req, res) => {
  const {
    data: { meal, docId }
  } = req.body;

  if (!docId || !meal) res.status(400).json("Unable To Proccess Request");

  try {
    // Check for existing type
    if (meal.type !== MealTypes["Easy meal/Snack"]) {
      const isMealTypeExist = await db.collection("nutrition").findOne({
        "author.uid": req.user?.uid,
        "meal.type": meal.type,
        "meal.date": {
          $gte: helpers.getStartDayDate(meal.date),
          $lte: helpers.getEndDayDate(meal.date)
        }
      });

      if (
        isMealTypeExist &&
        !new ObjectId(isMealTypeExist?._id).equals(docId)
      ) {
        return res
          .status(400)
          .json(
            `${MealTypes[meal.type]} on ${helpers.formatDate(
              meal.date
            )} Already exist`
          );
      }
    }

    meal.date = helpers.stringToDate(meal?.date);

    await db.collection("nutrition").updateOne(
      { _id: new ObjectId(docId), "author.uid": req.user.uid },
      {
        $set: {
          meal: meal
        }
      }
    );

    return res.json({
      message: "Meal Updated Successfully",
      docId,
      meal
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while updating meal");
  }
});

export enum MealTypes {
  Breakfast = 1,
  Lunch = 2,
  Dinner = 3,
  "Easy meal/Snack" = 4
}

export default nutritionRouter;
