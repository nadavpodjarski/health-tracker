import { Action, IUiState } from '../../../types/redux'
import * as types from '../constants'

const initialState: IUiState = {
   snackbar: { type: undefined, msg: '' },
   theme: localStorage.getItem('MT_isDark') === 'true',
   moduleTitle: ''
}

export const uiReducer = (state = initialState, action: Action): IUiState => {
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
      case types.SET_MODULE_TITLE:
         return {
            ...state,
            moduleTitle: action.payload
         }

      default:
         return state
   }
}
