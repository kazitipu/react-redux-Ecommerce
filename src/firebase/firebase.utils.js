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
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
