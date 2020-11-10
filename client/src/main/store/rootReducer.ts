import { combineReducers } from "redux";
import { authReducer } from "../../redux/auth/reducers/";
import { nutritionReducer } from "../../redux/trackers/nutrition/reducers";
import { uiReducer } from "../../redux/ui/reducer";
import { languagesReducer } from "../../redux/languages/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  nutrition: nutritionReducer,
  ui: uiReducer,
  languages: languagesReducer
});
