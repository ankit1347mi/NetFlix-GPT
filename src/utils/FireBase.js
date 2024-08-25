// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqjTgczimlozc2ojHZUbPJYc0NyoqjAI",
  authDomain: "netflixgpt-a6da4.firebaseapp.com",
  projectId: "netflixgpt-a6da4",
  storageBucket: "netflixgpt-a6da4.appspot.com",
  messagingSenderId: "337533870461",
  appId: "1:337533870461:web:c599503ea8c11152bd6c14",
  measurementId: "G-XDZHMJT6K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
