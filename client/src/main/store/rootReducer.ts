import { combineReducers } from 'redux'
import { authReducer } from '../../redux/auth/reducers/'
import { nutritionReducer } from '../../redux/trackers/nutrition/reducers'
import { uiReducer } from '../../redux/ui/reducer'
import { languagesReducer } from '../../redux/languages/reducers'
import { symptomsReducer } from '../../redux/trackers/symptoms/reducers'

export const rootReducer = combineReducers({
   auth: authReducer,
   nutrition: nutritionReducer,
   ui: uiReducer,
   languages: languagesReducer,
   symptoms: symptomsReducer
})
