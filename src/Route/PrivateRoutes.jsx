import React, { use } from "react";
import { AuthContext } from "../Datasharing/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  let location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-2xl"></span>;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoutes;
