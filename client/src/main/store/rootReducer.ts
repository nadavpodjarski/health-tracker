import { combineReducers } from "redux";
import { languagesReducer } from "../../redux/languages/reducers/languges";

export const rootReducer = combineReducers({
  languages: languagesReducer,
});
