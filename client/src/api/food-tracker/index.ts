import { useDatabase } from "../../main/firebase/useDatabase";
import * as utils from "../utils";

const foodCollection = utils.collections.food;
const usersCollection = utils.collections.users;

const { db } = useDatabase();

export const getMeals = async (currentUser: any, startAt: any, endAt: any) => {
  try {
    return db
      .collection(usersCollection)
      .doc(currentUser.uid)
      .collection(foodCollection)
      .orderBy("meal.timestamp")
      .startAt(startAt)
      .endAt(endAt);
    // .where("meal.timestamp", ">=", startAt)
    // .where("meal.timestamp", "<=", endAt);
  } catch (err) {
    throw err;
  }
};

export const postMeal = async (meal: any, currentUser: any) => {
  try {
    const author = utils.makeAuthor(currentUser);
    const doc = { author, meal, createdAt: Date.now() };
    db.collection(usersCollection)
      .doc(currentUser.uid)
      .collection(foodCollection)
      .doc()
      .set(doc);
  } catch (err) {
    throw err;
  }
};

export const deleteMeal = async (mealId: string, currentUser: any) => {
  try {
    db.collection(foodCollection).doc(mealId).delete();
  } catch (err) {
    throw err;
  }
};

export const putMeal = async (meal: any, currentUser: any) => {
  return "";
};
