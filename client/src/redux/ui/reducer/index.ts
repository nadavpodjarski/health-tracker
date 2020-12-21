import { Action, IUIState } from '../../../types/redux'
import * as types from '../constants'

const initialState: IUIState = {
   snackbar: { type: undefined, msg: '' },
   theme: JSON.parse(localStorage.getItem('MT_isDark') as string),
   modal: {
      type: null
   }
}

export const uiReducer = (state = initialState, action: Action): IUIState => {
   switch (action.type) {
      case types.SET_SNACKBAR:
         return {
            ...state,
            snackbar: action.payload
         }
      case types.CLEAR_SNACKBAR:
         return {
            ...state,
            snackbar: { type: undefined, msg: '' }
         }
      case types.SET_THEME:
         return {
            ...state,
            theme: action.payload
         }
      case types.SET_MODAL:
         return {
            ...state,
            modal: action.payload.modal
         }

      case types.CLOSE_MODAL:
         return {
            ...state,
            modal: {
               type: null
            }
         }

      default:
         return state
   }
}
