// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// require('dotenv').config();
// Your web app's Firebase configuration
// console.log(process.env.API_KEY);
// console.log(import.meta.env.API_KEY)
// console.log(import.meta.env.API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyD1nUaPAG0oE3RiwLkyJ9rXMADJ8gdZ4uY",
  authDomain: "scic-project-ass.firebaseapp.com",
  projectId: "scic-project-ass",
  storageBucket: "scic-project-ass.appspot.com",
  messagingSenderId: "532036985985",
  appId: "1:532036985985:web:588687d6d3282f7cf35980",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
