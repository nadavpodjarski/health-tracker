import { combineReducers } from "redux";
import { foodTrackReducer } from "../food/reducers";

export const trackersReducer = combineReducers({
  food: foodTrackReducer,
});
