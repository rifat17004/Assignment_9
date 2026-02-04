import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCT2PMrMlFT1pzeKDcV3kBKkoWwyu6MdqM",
  authDomain: "assesment-9-24043.firebaseapp.com",
  projectId: "assesment-9-24043",
  storageBucket: "assesment-9-24043.firebasestorage.app",
  messagingSenderId: "723159102871",
  appId: "1:723159102871:web:2f9c49da5b84ed88ae80d2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
