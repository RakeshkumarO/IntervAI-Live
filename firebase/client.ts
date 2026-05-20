// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCo44j6PnLScC_eFliRmG89zrKv3KuItQ",
  authDomain: "prepwise-c30b7.firebaseapp.com",
  projectId: "prepwise-c30b7",
  storageBucket: "prepwise-c30b7.firebasestorage.app",
  messagingSenderId: "934724383956",
  appId: "1:934724383956:web:0d66198747fa8c8e7d3741",
  measurementId: "G-REP28BKCPY"
};

// Initialize Firebase safely for Next.js (avoiding duplicate app initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);