import { combineReducers } from 'redux'
import { authReducer } from '../../redux/auth/reducers'
import { nutritionReducer } from '../../redux/nutrition/reducers'
import { uiReducer } from '../../redux/ui/reducer'
import { symptomsReducer } from '../../redux/symptoms/reducers'
import { homeReducer } from '../../redux/home/reducers'

export const rootReducer = combineReducers({
   auth: authReducer,
   nutrition: nutritionReducer,
   ui: uiReducer,
   symptoms: symptomsReducer,
   home: homeReducer
})
