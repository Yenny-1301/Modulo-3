import firebase from 'firebase/app'
import 'firebase/database'


var firebaseConfig = {
  apiKey: "AIzaSyAjUndNHZz7ALUZLaoT3MUbY4I6ICKwi7E",
  authDomain: "nysl-app2020.firebaseapp.com",
  databaseURL: "https://nysl-app2020.firebaseio.com",
  projectId: "nysl-app2020",
  storageBucket: "nysl-app2020.appspot.com",
  messagingSenderId: "147422641",
  appId: "1:147422641:web:8c46d8757cb83815fe1190"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = firebase.database()