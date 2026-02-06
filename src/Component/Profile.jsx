import React, { use } from "react";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Datasharing/AuthProvider";

const Profile = () => {
  const { user, updateUsarProfile, loading } = use(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUsarProfile(name, photo, user);
    formRef.current.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="md:w-1/2 bg-gradient-to-br from-[#FE5A1C] to-[#FFBF00] p-10 text-white flex flex-col items-center justify-center text-center">
          <div className="relative">
            <img
              src={user?.photoURL || "https://i.ibb.co/S4L1BrWN/Bid3-min.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl mb-6"
            />
            <div className="absolute bottom-6 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-white/80 mt-2 font-medium">{user?.email}</p>
          <div className="mt-8 px-6 py-2 bg-white/20 rounded-full text-sm backdrop-blur-md">
            Verified Member
          </div>
        </div>

        {/* Right Side: Edit Form */}
        <div className="md:w-1/2 p-10 bg-white">
          <h3 className="text-2xl font-black text-gray-800 mb-2">
            Update Profile
          </h3>
          <p className="text-gray-500 mb-8">
            Personalize your account details below.
          </p>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600">
                  Full Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Enter your name"
                className="input input-bordered w-full focus:border-[#FE5A1C] focus:ring-1 focus:ring-[#FE5A1C] text-black  bg-gray-50"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600">
                  Photo URL
                </span>
              </label>
              <input
                name="photo"
                type="text"
                defaultValue={user?.photoURL}
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full focus:border-[#FE5A1C] focus:ring-1 focus:ring-[#FE5A1C] text-black  bg-gray-50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn w-full bg-[#FE5A1C] hover:bg-[#e04f19] text-white border-none rounded-xl mt-4 h-14 text-lg font-bold transition-all shadow-lg shadow-orange-100 ${loading ? "loading" : ""}`}
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
