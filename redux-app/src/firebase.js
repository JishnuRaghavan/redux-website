// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "redux-app-7d270.firebaseapp.com",
  projectId: "redux-app-7d270",
  storageBucket: "redux-app-7d270.appspot.com",
  messagingSenderId: "571543595400",
  appId: "1:571543595400:web:0536c2bfd7b7aa37bc723d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);