import firebase from '../index'

export const useDatabase = () => {
    const db = firebase.firestore();

    return { db }
}