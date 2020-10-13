import firebase from 'firebase'

export const firebaseLogout = () => {
    firebase.auth().signOut();
}