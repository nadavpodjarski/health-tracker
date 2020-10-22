import { v4 as uuidv4 } from "uuid";
import { MealComponent } from "../../types/food";

const mealComponent = (uuid: any): (() => MealComponent) => {
  return () => {
    return { id: uuid(), food: "", amount: "", metric: "gr" };
  };
};

export const uuid = uuidv4;
export const makeNewMealComponent = mealComponent(uuidv4);
