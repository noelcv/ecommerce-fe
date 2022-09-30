// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv5vKQy7a8sC-4j3SoWFrrNxhuJhZpxV8",
  authDomain: "ecommerce-5858d.firebaseapp.com",
  projectId: "ecommerce-5858d",
  storageBucket: "ecommerce-5858d.appspot.com",
  messagingSenderId: "814902469498",
  appId: "1:814902469498:web:95fd8c160d2f3bc49fecc3",
  measurementId: "G-XKQZ69GPR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;