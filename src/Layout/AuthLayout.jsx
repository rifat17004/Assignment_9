import React from "react";
import NavBar from "../Component/NavBar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
