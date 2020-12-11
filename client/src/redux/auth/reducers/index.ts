import * as types from '../constants'
import { IAuth, Action } from '../../../types/redux'

const initialState = {
   currentUser: null,
   isInitializing: true
}

export const authReducer = (
   state: IAuth = initialState,
   action: Action
): IAuth => {
   switch (action.type) {
      case types.USER_LOGIN:
         return {
            ...state,
            currentUser: action.payload,
            isInitializing: false
         }
      case types.USER_LOGOUT:
         return {
            ...state,
            currentUser: null,
            isInitializing: false
         }
      default:
         return state
   }
}
