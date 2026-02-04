import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <div className="relative -mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <Link to="/">
          <button className="btn btn-lg bg-gradient-to-r from-[#FE5A1C] to-[#FFBF00] border-none text-white px-10 rounded-full shadow-lg hover:scale-105 transition-transform uppercase tracking-widest font-bold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
