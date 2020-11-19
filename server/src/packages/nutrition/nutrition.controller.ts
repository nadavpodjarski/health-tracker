import { Request, Response } from "express";
import { Meal } from "./nutrition.model";
import * as _ from "lodash";
import * as helpers from "../../helpers";

export const addMeal = async (req: Request, res: Response) => {
  const { data: mealData } = req.body;
  if (_.isEmpty(mealData))
    return res.status(400).json("Unable To Proccess Request");

  try {
    if (mealData.type !== MealTypes["Easy meal/Snack"]) {
      const isMealTypeExist = !!(await Meal.findOne({
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
    const newMeal = new Meal({
      author: {
        uid: req.user?.uid,
        displayName: req.user?.name
      },
      meal: mealData
    });
    const meal = await newMeal.save();
    return res.status(200).json({ message: "Meal Added Successfully", meal });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an error while adding meal");
  }
};

export const getMeals = async (req: Request, res: Response) => {
  const { startAt, endAt } = req.query;

  if (!startAt || !endAt)
    return res.status(400).json("Unable To Proccess Request");

  try {
    const start = helpers.getStartDayDate(startAt as string);
    const end = helpers.getEndDayDate(endAt as string);

    const meals = await Meal.aggregate([
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
    ]);

    return res.json(meals);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while fetching meals");
  }
};

export const deletMeal = async (req: Request, res: Response) => {
  const { docId: _id } = req.query;

  if (!_id || typeof _id !== "string")
    return res.status(400).json("Unable To Proccess Request");

  try {
    const doc: any = await Meal.findOne({ _id });

    if (doc.author.uid !== req.user?.uid)
      return res.status(403).json("Unauthorized request");

    await Meal.deleteOne(doc);

    return res.json({ message: "Meal Deleted Successfully", docId: _id });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while deleting meal");
  }
};

export const editMeal = async (req: Request, res: Response) => {
  const {
    data: { meal, docId: _id }
  } = req.body;

  if (!_id || !meal) res.status(400).json("Unable To Proccess Request");

  try {
    // Check for existing type
    if (meal.type !== MealTypes["Easy meal/Snack"]) {
      const isMealTypeExist = await Meal.findOne({
        "author.uid": req.user?.uid,
        "meal.type": meal.type,
        "meal.date": {
          $gte: helpers.getStartDayDate(meal.date),
          $lte: helpers.getEndDayDate(meal.date)
        }
      });

      if (isMealTypeExist && isMealTypeExist._id !== _id) {
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

    await Meal.updateOne(
      { _id, "author.uid": req.user.uid },
      {
        $set: {
          meal: meal
        }
      }
    );

    return res.json({
      message: "Meal Updated Successfully",
      docId: _id,
      meal
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json("There was an Error while updating meal");
  }
};

export enum MealTypes {
  Breakfast = 1,
  Lunch = 2,
  Dinner = 3,
  "Easy meal/Snack" = 4
}
