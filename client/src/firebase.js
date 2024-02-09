// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-717e6.firebaseapp.com",
  projectId: "mern-blog-717e6",
  storageBucket: "mern-blog-717e6.appspot.com",
  messagingSenderId: "651906567228",
  appId: "1:651906567228:web:2733205ea684318cbc0739"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);