import axios from "axios";
import { Meal } from "../../types/food";

export const getMeals = async (startAt: string, endAt: string) => {
  try {
    const res = await axios.get("/food/get-meals", {
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
    return await axios.post("/food/add-meal", { data: meal });
  } catch (err) {
    throw err;
  }
};

export const deleteMeal = async (docId: string) => {
  try {
    return await axios.delete("/food/delete-meal", { params: { docId } });
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
