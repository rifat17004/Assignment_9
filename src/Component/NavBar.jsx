import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const NavBar = () => {
  const link = (
    <>
      <li className="text-2xl mx-5">
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="text-2xl mx-5">
        <Link to="about">About</Link>{" "}
      </li>
      <li className="text-2xl mx-5">
        <Link to="event">Event</Link>
      </li>
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
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <FaRegUserCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
