import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_Key,
  authDomain: import.meta.env.VITE_AUTH_Domain,
  projectId: import.meta.env.VITE_PROJECT_Id,
  storageBucket: import.meta.env.VITE_STORAGE_Bucket,
  messagingSenderId: import.meta.env.VITE_MASSING_SenderId,
  appId: import.meta.env.VITE_APP_Id,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
