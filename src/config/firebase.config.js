// firebase.config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbxTOjaOEwTgy-X3dmJZVeByg6_K1sK5w",
  authDomain: "rafa-tutoring.firebaseapp.com",
  projectId: "rafa-tutoring",
  storageBucket: "rafa-tutoring.appspot.com",
  messagingSenderId: "319908968639",
  appId: "1:319908968639:web:449bc8d0a41a38c4adae0a",
  measurementId: "G-CB9SFFMEB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, db };
