import { combineReducers } from "redux";
import { languagesReducer } from "../../redux/languages/reducers";
import { authReducer } from "../../redux/auth/reducers/";
import {trackersReducer} from '../../redux/trackers/root-reducer'

export const rootReducer = combineReducers({
  languages: languagesReducer,
  auth: authReducer,
  trackers :trackersReducer
});
