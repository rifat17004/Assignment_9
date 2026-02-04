import React, { use } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import "../Component/CssFile/NavStyle.css";
import { AuthContext } from "../Datasharing/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  console.log(user);
  const link = (
    <>
      <li className="text-2xl mx-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-2xl mx-5">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-2xl mx-5">
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
        <li className="text-2xl mx-5">
          <NavLink
            to="/eventGallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 p-0.5 shadow-sm">
      <div className="navbar-start ml-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-[125px] rounded-2xl" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end mr-10">
        <div>
          {user ? (
            <button onClick={signOutUser} className="btn mx-5">
              Log out
            </button>
          ) : (
            <Link to="/auth/login" className="btn mx-5">
              Log In
            </Link>
          )}
        </div>

        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          <div className="avatar cursor-pointer">
            <div className="w-10 rounded-full   hover:scale-105 transition-transform">
              {user?.photoURL ? (
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <FaRegUserCircle className="text-3xl w-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <button className="btn btn-ghost btn-circle">
          {user?.photoURL ? (
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <FaRegUserCircle className="text-3xl" />
          )}
        </button> */
}
