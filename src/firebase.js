// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7HCLie9rHzUjI2lQ-KY9SAZc2ON13A0",
  authDomain: "cityhospital-220f7.firebaseapp.com",
  projectId: "cityhospital-220f7",
  storageBucket: "cityhospital-220f7.appspot.com",
  messagingSenderId: "618700243582",
  appId: "1:618700243582:web:74142962787f7b12114e2f",
  measurementId: "G-EPJSH4RT4V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

