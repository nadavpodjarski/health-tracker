import firebase from '../main/firebase'

export const firebaseLogout = () => {
    firebase.auth().signOut();
}