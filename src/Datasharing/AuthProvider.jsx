import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  return <AuthContext value={"hello"}>{children}</AuthContext>;
};

export default AuthProvider;
