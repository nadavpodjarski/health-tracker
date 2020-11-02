import { MealIngredient } from "../../types/nutrition";
import { uuid } from "..";

const mealIngredient = (uuid: () => string): (() => MealIngredient) => {
  return () => {
    return { id: uuid(), item: "", amount: "", metric: "gr" };
  };
};

export const makeNewMealIngredient = mealIngredient(uuid);
