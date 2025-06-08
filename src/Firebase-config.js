// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiA31-0TemOLfvAWAWGC--2DFSLZQ-Mcw",
  authDomain: "marketing-program-cf060.firebaseapp.com",
  projectId: "marketing-program-cf060",
  storageBucket: "marketing-program-cf060.firebasestorage.app",
  messagingSenderId: "360799407774",
  appId: "1:360799407774:web:57be443cf0a4a7519bf58f",
  measurementId: "G-ZHKJQ66CZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)