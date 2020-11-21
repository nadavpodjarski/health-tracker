import * as types from '../constants'

import { SnackBarAlert } from '../../../types/ui'

export const setSnackBar = (data: SnackBarAlert) => {
   return {
      type: types.SET_SNACKBAR,
      payload: data
   }
}

export const clearSnackBar = () => {
   return {
      type: types.CLEAR_SNACKBAR
   }
}

export const setTheme = (checked: boolean) => {
   return {
      type: types.SET_THEME,
      payload: checked
   }
}
