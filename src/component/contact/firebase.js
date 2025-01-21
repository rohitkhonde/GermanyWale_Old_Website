// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import Realtime Database functions

const firebaseConfig = {
  apiKey: "AIzaSyApAH8H1j5KtF1jUUaVAlP-p8kkwLqGRZg",
  authDomain: "germanywale-988f1.firebaseapp.com",
  projectId: "germanywale-988f1",
  storageBucket: "germanywale-988f1.appspot.com",
  messagingSenderId: "152098924844",
  appId: "1:152098924844:web:2560cf931dbf26e8392489",
  measurementId: "G-QDX2S2NJK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database

export { app, auth, database }; // Export the Realtime Database reference
