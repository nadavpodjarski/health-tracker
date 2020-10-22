import { Meals } from "../food";
import { ParsedDateRange } from "..";

export interface IAuth {
  currentUser: any;
  isLoading: boolean;
}

export interface IFoodState {
  meals: Meals;
  dateRange: ParsedDateRange;
  isLoading: boolean;
  err: any;
}

export interface IStore {
  auth: IAuth;
  food: IFoodState;
}

export type Action = {
  type: string;
  payload: any;
};
