import * as types from '../constants'

import { Action } from '../../../types/redux'

const initialState = {
   isSending: false,
   err: null
}

export const homeReducer = (state = initialState, action: Action) => {
   switch (action.type) {
      case types.SEND_CONTACT_FORM:
         return {
            isSending: true,
            err: null
         }
      case types.SEND_CONTACT_FORM_FALIURE:
         return {
            isSending: false,
            err: action.payload
         }
      case types.SEND_CONTACT_FORM_SUCCESS:
         return {
            isSending: false,
            err: null
         }
      default:
         return state
   }
}
