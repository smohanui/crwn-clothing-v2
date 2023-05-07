// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBt4K9jAGAXXBAfybI0uA3gI36jNkxK_I",
  authDomain: "react-crownbase.firebaseapp.com",
  projectId: "react-crownbase",
  storageBucket: "react-crownbase.appspot.com",
  messagingSenderId: "964282173182",
  appId: "1:964282173182:web:9213f6c27089af558887af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//This is a singleton, it has capable of tracking whether user logged in or not for the current session
//It will provice the authentication results for later use through out the session.
//This is usefull to get authentication results in redirect method of authentication.
export const auth = getAuth(app);
//To accept google accounts have to create google provider
//Similary to accept facebook, microsoft have to create their respective providers.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//To authenticate the users by showing popup to sign in
export const signInPopUp = () => signInWithPopup(auth, googleProvider);

//To authenticate the users by redirecting to the other page
export const gSignInredir = () => {
  signInWithRedirect(auth, googleProvider);
};

//the following db points to firestore, it is similar to database connection
const db = getFirestore();

export const createUserDoc = async (userAuthData) => {
  // Whenever a request made to doc it always return object with unique id whether requested
  // document exist or not.
  const docRef = doc(db, "users", userAuthData.uid);
  console.log(docRef);
  // GetDoc reads the data using document reference.
  const docSnapshot = await getDoc(docRef);
  //exists() reutrn bool value
  //   true  --> document alredu stored in the firestore database
  //   false --> document not stored in the firestore database
  console.log(docSnapshot.exists());
  if (!docSnapshot.exists()) {
    const { email, displayName } = userAuthData;
    const createdAt = new Date();

    await setDoc(docRef, {
      email,
      displayName,
      createdAt,
    });
  }
  return docSnapshot;
};
