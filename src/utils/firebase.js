// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mind-blog-app.firebaseapp.com",
  projectId: "mind-blog-app",
  storageBucket: "mind-blog-app.appspot.com",
  messagingSenderId: "885004614272",
  appId: "1:885004614272:web:8ccfecc53bf4f161b68465"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);