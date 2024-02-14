
// import { initializeApp, FirebaseOptions } from "firebase/app";
// import * as auth from "firebase/auth";

// const firebaseConfig: FirebaseOptions = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   appId: process.env.REACT_APP_ID,
// };

// // Initialize Firebase
// export const appFirebase = initializeApp(firebaseConfig);
// export const authFirebase = auth.initializeAuth(appFirebase)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as auth from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcakOstcIpSL3FLmB_gMUQcNaD4JkIflk",
    authDomain: "auth-edcastillob.firebaseapp.com",
    projectId: "auth-edcastillob",
    storageBucket: "auth-edcastillob.appspot.com",
    messagingSenderId: "97748733701",
    appId: "1:97748733701:web:a45948244a2e9bbc80f16c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.initializeAuth(appFirebase)

