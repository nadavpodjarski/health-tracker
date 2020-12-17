import { Dispatch } from 'react'

import * as types from '../constants'
import * as homeAPI from '../../../api/home'
import * as uiActions from '../../ui/actions'

const createSendContactForm = () => {
   return {
      type: types.SEND_CONTACT_FORM
   }
}

const sendContactFormSuccess = (data: any) => (dispatch: Dispatch<any>) => {
   dispatch({
      type: types.SEND_CONTACT_FORM_SUCCESS,
      payload: data
   })
   dispatch(uiActions.setSnackBar({ type: 'success', msg: data.message }))
}

const sendContactFormFaliure = (errMessage: any) => (
   dispatch: Dispatch<any>
) => {
   if (typeof errMessage === 'string')
      dispatch(uiActions.setSnackBar({ type: 'error', msg: errMessage }))

   dispatch({
      type: types.SEND_CONTACT_FORM_FALIURE,
      payload: errMessage
   })
}

export const sendContactForm = (data: any) => async (
   dispatch: Dispatch<any>
) => {
   try {
      dispatch(createSendContactForm())
      const res = await homeAPI.postContactForm(data)
      dispatch(sendContactFormSuccess(res))
   } catch (err) {
      dispatch(sendContactFormFaliure(err.message))
   }
}
