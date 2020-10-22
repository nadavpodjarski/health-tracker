import { MealComponent } from "../../types/food";
import { uuid } from "../";

const mealComponent = (uuid: () => string): (() => MealComponent) => {
  return () => {
    return { id: uuid(), food: "", amount: "", metric: "gr" };
  };
};

export const makeNewMealComponent = mealComponent(uuid);
