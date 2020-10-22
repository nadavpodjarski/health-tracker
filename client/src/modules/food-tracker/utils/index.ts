import { v4 as uuidv4 } from "uuid";
import { MealComponent } from "../../../main/types/food";
const mealComponent = (uuid: any) => {
  return () => {
    return { id: uuid(), food: "", amount: "", metric: "gr" } as MealComponent;
  };
};

export const uuid = uuidv4;
export const makeNewMealComponent = mealComponent(uuidv4);
