import { Meals } from "../nutrition";
import { ParsedDateRange } from "..";
import { SnackBarAlert } from "../ui";

export interface IAuth {
  currentUser: any;
  isLoading: boolean;
}

export interface INutrition {
  nutrition: Meals;
  dateRange: ParsedDateRange;
  isLoading: boolean;
  err: any;
}

export interface IStore {
  auth: IAuth;
  nutrition: INutrition;
  ui: IUiState;
}

export type Action = {
  type: string;
  payload: any;
};

export interface IUiState {
  snackbar: SnackBarAlert;
}
