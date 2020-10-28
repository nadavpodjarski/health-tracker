import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUWOKF3UaFkMlIEZnRCkzWpx3aCgr0cL4",
  authDomain: "ibd-track.firebaseapp.com",
  databaseURL: "https://ibd-track.firebaseio.com",
  projectId: "ibd-track"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
