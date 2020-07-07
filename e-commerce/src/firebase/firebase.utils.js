import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDei0LmrXucLuSj-649wVZ8oPArwvy3hOw",
  authDomain: "crwn-clothing-9dafe.firebaseapp.com",
  databaseURL: "https://crwn-clothing-9dafe.firebaseio.com",
  projectId: "crwn-clothing-9dafe",
  storageBucket: "crwn-clothing-9dafe.appspot.com",
  messagingSenderId: "114542996051",
  appId: "1:114542996051:web:3f3c474bd23c4eb7c7b4a6",
  measurementId: "G-E48BN92EMW",
};

firebase.initializeApp(firebaseConfig);
export var provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
