import React, { use } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import "../Component/CssFile/NavStyle.css";
import { AuthContext } from "../Datasharing/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const link = (
    <>
      <li className="text-xl lg:text-2xl lg:mx-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl lg:text-2xl lg:mx-2">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-xl lg:text-2xl lg:mx-2">
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Event
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-xl lg:text-2xl lg:mx-2">
            <NavLink
              to="/eventGallery"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className="text-xl lg:text-2xl lg:mx-2">
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 p-2 shadow-sm sticky top-0 z-[100]">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-xl border border-gray-100"
          >
            {link}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="btn btn-ghost px-1 lg:px-4">
          <img className="w-24 md:w-32 rounded-lg" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{link}</ul>
      </div>

      <div className="navbar-end gap-2 md:mr-5">
        <div className="flex items-center gap-3">
          {user ? (
            <button
              onClick={signOutUser}
              className="btn btn-sm md:btn-md btn-outline border-[#FE5A1C] text-[#FE5A1C] hover:bg-[#FE5A1C] hover:border-[#FE5A1C]"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm md:btn-md bg-[#FE5A1C] border-none text-white hover:bg-[#e04f19]"
            >
              Log In
            </Link>
          )}

          {/* User Profile Tooltip */}
          <div
            className="tooltip tooltip-bottom"
            data-tip={user?.displayName || "Guest"}
          >
            <div className="avatar cursor-pointer">
              <div className="w-10 md:w-12 rounded-full ring-2 ring-[#FE5A1C] ring-offset-base-100 ring-offset-2 hover:scale-110 transition-transform overflow-hidden">
                {user?.photoURL ? (
                  <img
                    className="w-full h-full object-cover"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <FaRegUserCircle className="text-2xl text-gray-500" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
