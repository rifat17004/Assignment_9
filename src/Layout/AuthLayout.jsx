import React from "react";
import NavBar from "../Component/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
