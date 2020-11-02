import { MealIngredient } from "../../types/nutrition";
import { uuid } from "..";
import moment from "moment";
import { MealTypes } from "../../types/nutrition";

const mealIngredient = (uuid: () => string): (() => MealIngredient) => {
  return () => {
    return { id: uuid(), item: "", amount: "", metric: "gr" };
  };
};
export const mealTypes = [
  { const: "Breakfast", value: 0 },
  { const: "Lunch", value: 1 },
  { const: "Dinner", value: 2 },
  { const: "Easy meal/Snack", value: 3 }
];

export const makeNewMeal = () => {
  return {
    type: mealTypes[0].value as MealTypes,
    ingredients: [makeNewMealIngredient()],
    comments: "",
    date: moment().toDate()
  };
};

export const makeNewMealIngredient = mealIngredient(uuid);
