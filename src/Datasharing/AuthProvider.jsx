import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Component/Firebase/Firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // email pass authentacion create new user
  const emailPassAuthen = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError("");
        alert("User Created Succesfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // Login mathod Sign in a user with an email address and password

  const OldUserLogin = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Succesfully");
        setError("");
      })
      .catch((error) => {
        setLoading(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // sign out

  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        alert("Log Out Succesfully");
      })
      .catch((error) => {
        setError(error);
      });
  };
  // managing user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);
  const authData = {
    emailPassAuthen,
    OldUserLogin,
    signOutUser,
    user,
    error,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
