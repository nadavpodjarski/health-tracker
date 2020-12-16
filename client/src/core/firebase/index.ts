import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
   apiKey: 'AIzaSyCUWOKF3UaFkMlIEZnRCkzWpx3aCgr0cL4',
   authDomain: 'ibd-track.firebaseapp.com',
   databaseURL: 'https://ibd-track.firebaseio.com',
   projectId: 'ibd-track',
   appId: '1:1000017512669:web:7f972629f7429040af3334'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
