// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD_j1jVDaT4PBWUleyjCnGi3C687oJoqwY",
    authDomain: "ifdatabase.firebaseapp.com",
    projectId: "ifdatabase",
    storageBucket: "ifdatabase.firebasestorage.app",
    messagingSenderId: "1007224668753",
    appId: "1:1007224668753:web:14a9f9841a905359c2ae70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
