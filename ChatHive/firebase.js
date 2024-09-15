// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0Q_NmDSid2HP390G1VXPHHbdAOL1u2c",
  authDomain: "chathive-858ed.firebaseapp.com",
  projectId: "chathive-858ed",
  storageBucket: "chathive-858ed.appspot.com",
  messagingSenderId: "1049127055378",
  appId: "1:1049127055378:web:de9299d90eef9e6e8ae8cb",
  measurementId: "G-R5LLD04G4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export {auth};