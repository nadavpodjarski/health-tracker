import axios from "axios";
import { Meal } from "../../types/nutrition";

export const getMeals = async (startAt: Date, endAt: Date) => {
  try {
    const res = await axios.get("/api/nutrition/get-meals", {
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
    return await axios.post("/api/nutrition/add-meal", { data: meal });
  } catch (err) {
    throw err;
  }
};

export const deleteMeal = async (docId: string) => {
  try {
    return await axios.delete("/api/nutrition/delete-meal", {
      params: { docId }
    });
  } catch (err) {
    throw err;
  }
};

export const putMeal = async (meal: Meal, docId: string) => {
  try {
    return await axios.put("/api/nutrition/edit-meal", {
      data: { meal, docId }
    });
  } catch (err) {
    throw err;
  }
};
