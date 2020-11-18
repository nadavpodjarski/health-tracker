import * as types from "../constants";
import * as appUtils from "../../../../utilities";

import { INutrition, Action } from "../../../../types/redux";

const initialState: INutrition = {
  meals: [],
  dateRange: appUtils.parseDateRange([new Date(), new Date()]),
  isLoading: false,
  err: null
};

export const nutritionReducer = (
  state = initialState,
  action: Action
): INutrition => {
  switch (action.type) {
    case types.DELETE_MEAL:
      return state;
    case types.ADD_MEAL_SUCCESS:
      return state;
    case types.DELETE_MEAL_SUCCESS: {
      const meals = state.meals
        .map((mealsByDate) => {
          return {
            ...mealsByDate,
            meals: mealsByDate.meals.filter(
              (mealDoc) => mealDoc.id !== action.payload
            )
          };
        })
        .filter((mealsByDate) => mealsByDate.meals.length);
      return {
        ...state,
        err: null,
        meals
      };
    }
    case types.EDIT_MEAL_SUCCESS: {
      const meals = state.meals.map((mealsByDate) => {
        mealsByDate.meals.map((mealDoc) => {
          if (mealDoc.id === action.payload.docId)
            mealDoc.meal = action.payload.meal;
          return mealDoc;
        });
        return mealsByDate;
      });
      return {
        ...state,
        err: null,
        meals
      };
    }
    case types.GET_MEALS:
      return {
        ...state,
        isLoading: true
      };
    case types.SET_MELAS_DATE_RANGE:
      return {
        ...state,
        dateRange: appUtils.parseDateRange(action.payload)
      };
    case types.GET_MEALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meals: action.payload,
        err: null
      };
    case types.CLEAR_MEALS:
      return {
        ...state,
        meals: []
      };
    case types.ADD_MEAL:
      return state;
    case types.EDIT_MEAL:
      return state;

    case types.REQUEST_ERR:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};
