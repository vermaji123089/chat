// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDGrnB3tBy5MQnn5hjuFj9c5fZPhAzdlcU",
  authDomain: "chat-f0eb5.firebaseapp.com",
  projectId: "chat-f0eb5",
  storageBucket: "chat-f0eb5.appspot.com",
  messagingSenderId: "545084048038",
  appId: "1:545084048038:web:990fe268ed353bcfa16a67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();