import { useDatabase } from "../../main/firebase/useDatabase";
import * as apiUtils from "../utils";

const foodCollection = apiUtils.collections.food;

const { db } = useDatabase();

export const getMeals = async (
  currentUser: any,
  startAt: string,
  endAt: string
) => {
  try {
    return db
      .collection(foodCollection)
      .where("author.uid", "==", currentUser.uid)
      .orderBy("meal.date")
      .startAt(startAt)
      .endAt(endAt);
  } catch (err) {
    throw err;
  }
};

export const postMeal = async (meal: any, currentUser: any) => {
  try {
    const author = apiUtils.makeAuthor(currentUser);
    const doc = { author, meal, createdAt: Date.now() };
    db.collection(foodCollection).doc().set(doc);
  } catch (err) {
    throw err;
  }
};

export const deleteMeal = async (docId: string, currentUser: any) => {
  try {
    db.collection(foodCollection).doc(docId).delete();
  } catch (err) {
    throw err;
  }
};

export const putMeal = async (meal: any, currentUser: any) => {
  return "";
};
