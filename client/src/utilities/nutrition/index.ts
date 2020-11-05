import { MealIngredient, Meal } from "../../types/nutrition";
import { uuid } from "..";
import moment from "moment";
import { MealTypes } from "../../types/nutrition";

const mealIngredient = (uuid: () => string): (() => MealIngredient) => {
  return () => {
    return { id: uuid(), item: "", amount: "", unit: "g" };
  };
};
export const mealTypes = [
  { const: "Breakfast", value: 1 },
  { const: "Lunch", value: 2 },
  { const: "Dinner", value: 3 },
  { const: "Easy meal/Snack", value: 4 }
];

export const units = ["g", "oz", "ml"];

export const makeNewMeal = () => {
  return {
    type: mealTypes[0].value as MealTypes,
    ingredients: [makeNewMealIngredient()],
    comments: "",
    date: moment().toDate()
  };
};

export const makeNewMealIngredient = mealIngredient(uuid);

export const isValidMeal = (state: Meal) => {
  let ingredientIndex = 0;
  const error = {
    date: !state.date ? "Must Pick A Date" : "",
    ingredients: !state.ingredients.every((ing, i) => {
      ingredientIndex = i;
      return ing.item.trim();
    })
      ? {
          index: ingredientIndex,
          message: "Cannot Submit Empty Ingredients"
        }
      : "",
    type: !state.type ? "Must Pick A Meal Type" : ""
  };
  if (error.date || error.ingredients || error.type) throw error;
  else return "ok";
};
