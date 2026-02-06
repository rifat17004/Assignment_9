import React, { use, useContext, useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";

import { AuthContext } from "../Datasharing/AuthProvider";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const { resetEmailUser } = use(AuthContext);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("Please provide a valid email address.");
      return;
    }
    resetEmailUser(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-800">Reset Password</h2>
          <p className="text-gray-500 mt-2">
            Enter your email to receive a password reset link.
          </p>
        </div>

        <form onSubmit={handleResetPassword} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-gray-600">
                Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered text-black w-full focus:border-[#FE5A1C] focus:ring-1 focus:ring-[#FE5A1C] bg-gray-50 h-12"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#FE5A1C] hover:bg-[#e04f19] text-white border-none rounded-xl h-12 text-lg font-bold transition-all shadow-lg shadow-orange-100"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/auth/login")}
            className="text-sm font-semibold text-[#FE5A1C] hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
