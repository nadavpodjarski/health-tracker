import axios from "axios";
import { Meal } from "../../types/nutrition";

export const getMeals = async (startAt: Date, endAt: Date) => {
  try {
    const res = await axios.get("/nutrition/get-meals", {
      params: {
        startAt,
        endAt
      }
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const postMeal = async (meal: Meal) => {
  try {
    return await axios.post("/nutrition/add-meal", { data: meal });
  } catch (err) {
    throw err;
  }
};

export const deleteMeal = async (docId: string) => {
  try {
    return await axios.delete("/nutrition/delete-meal", { params: { docId } });
  } catch (err) {
    throw err;
  }
};

export const putMeal = async (meal: Meal) => {
  try {
  } catch (err) {
    throw err;
  }
};
