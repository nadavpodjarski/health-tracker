import { combineReducers } from "redux";
import { authReducer } from "../../redux/auth/reducers/";
import { foodTrackReducer } from "../../redux/trackers/food/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  food: foodTrackReducer
});
