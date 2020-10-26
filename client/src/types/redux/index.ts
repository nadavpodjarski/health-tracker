import { Meals } from "../food";
import { ParsedDateRange } from "..";
import { SnackBarAlert } from "../ui";

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
  ui: IUiState;
}

export type Action = {
  type: string;
  payload: any;
};

export interface IUiState {
  snackbar: SnackBarAlert;
}
