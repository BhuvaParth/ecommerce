// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY-LxcGH0bTZ6pW-rNW__FW68KRdesPlc",
  authDomain: "ecommerce-d9382.firebaseapp.com",
  projectId: "ecommerce-d9382",
  storageBucket: "ecommerce-d9382.appspot.com",
  messagingSenderId: "542988654083",
  appId: "1:542988654083:web:ac66c3c4abe9bf36c36036",
  measurementId: "G-V8481ECHLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);