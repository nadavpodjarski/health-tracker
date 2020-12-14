import * as types from '../constants'
import { useFirebaseAuth } from '../../../main/firebase/useFirebaseAuth'
import { Dispatch } from 'react'
import * as api from '../../../api/users'
import * as apiUtils from '../../../utilities/api'
import { IUser } from '../../../types/auth'
const { firebaseAuth } = useFirebaseAuth()

export const userLoggedIn = (user: any) => {
   return {
      type: types.USER_LOGIN,
      payload: user
   }
}

export const userLoggedOut = () => {
   return {
      type: types.USER_LOGOUT
   }
}

export const logout = () => {
   firebaseAuth().signOut()
   apiUtils.removeAuthToken()
}

export const onAuthStateChange = (cb: (user: IUser) => void) => (
   dispatch: Dispatch<any>
) => {
   firebaseAuth().onAuthStateChanged(async (user) => {
      if (user) {
         try {
            const userProfile: IUser = await api.getProfile()
            dispatch(userLoggedIn(userProfile))
            cb(userProfile)
         } catch (err) {
            console.log(err)
         }
      } else {
         dispatch(userLoggedOut())
      }
   })
}
