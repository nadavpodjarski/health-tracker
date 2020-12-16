import firebase from '../index'

export const useFirebaseAuth = () => {
   const firebaseAuth = firebase.auth

   return { firebaseAuth }
}
