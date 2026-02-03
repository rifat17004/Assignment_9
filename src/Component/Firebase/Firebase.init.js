import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBgkqUysnGwBenCQ5T2J7oGqSlh_QYg_ZQ",
  authDomain: "assesment-9-ebff7.firebaseapp.com",
  projectId: "assesment-9-ebff7",
  storageBucket: "assesment-9-ebff7.firebasestorage.app",
  messagingSenderId: "572278650876",
  appId: "1:572278650876:web:3f2d016fec8186494ba479",
  measurementId: "G-P5YWNWT0CS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
