import { combineReducers } from "redux";
import { languagesReducer } from "../../redux/languages/reducers";
import { authReducer } from "../../redux/auth/reducers/";

export const rootReducer = combineReducers({
  languages: languagesReducer,
  auth: authReducer,
});
