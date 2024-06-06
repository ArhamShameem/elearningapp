// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGbAVeIrRlVEZJgSZZJb77VQXn0XH_-dM",
  authDomain: "elearningapp-55bed.firebaseapp.com",
  projectId: "elearningapp-55bed",
  storageBucket: "elearningapp-55bed.appspot.com",
  messagingSenderId: "1031863938164",
  appId: "1:1031863938164:web:7a637289f89b4ed0adb521",
  measurementId: "G-MMLSNBY5ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const getAuth = getAuth(app);

export{app,auth};