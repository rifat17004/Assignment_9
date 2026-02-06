import React, { createContext, use, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Component/Firebase/Firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // sign in with google

  const googleSign = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  // email pass authentacion create new user
  const emailPassAuthen = (email, password, name, photo) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUsarProfile(name, photo, user);

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

  // update Profile
  const updateUsarProfile = (name, photo, user) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        alert("profile Updated");
        setUser({ ...user, displayName: name, photoURL: photo });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  // reset email
  const resetEmailUser = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Link has beed sent to your gmail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
        console.log(error);
        // ..
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
    googleSign,
    OldUserLogin,
    signOutUser,
    updateUsarProfile,
    resetEmailUser,
    user,
    setUser,
    error,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
