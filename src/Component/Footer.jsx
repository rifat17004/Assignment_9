import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="footer w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <aside className="flex flex-col gap-4">
          <img className="w-40 rounded-xl" src={logo} alt="EventMaster Logo" />
          <p className="mt-2 text-sm leading-relaxed">
            <span className="text-xl font-bold text-white">
              EventMaster Ltd.
            </span>
            <br />
            Transforming your moments into <br /> unforgettable memories since
            2020.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-2xl hover:text-[#FE5A1C] transition-colors">
              <FaFacebook />
            </a>
            <a className="text-2xl hover:text-[#FE5A1C] transition-colors">
              <FaTwitter />
            </a>
            <a className="text-2xl hover:text-[#FE5A1C] transition-colors">
              <FaYoutube />
            </a>
            <a className="text-2xl hover:text-[#FE5A1C] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </aside>

        {/* Services Section */}
        <nav>
          <h6 className="footer-title text-white opacity-100 border-b-2 border-[#FE5A1C] mb-4">
            Events
          </h6>
          <a className="link link-hover">Corporate Galas</a>
          <a className="link link-hover">Wedding Planning</a>
          <a className="link link-hover">Tech Summits</a>
          <a className="link link-hover">Music Festivals</a>
        </nav>

        {/* Legal & Company Section */}
        <nav>
          <h6 className="footer-title text-white opacity-100 border-b-2 border-[#FE5A1C] mb-4">
            Legal
          </h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
          <a className="link link-hover">About Us</a>
        </nav>

        {/* Newsletter Section */}
        <nav className="w-full">
          <h6 className="footer-title text-white opacity-100 border-b-2 border-[#FE5A1C] mb-4">
            Newsletter
          </h6>
          <p className="text-sm mb-4">
            Subscribe to get the latest event updates.
          </p>
          <div className="join w-full">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full bg-gray-800 border-gray-700 text-white"
            />
            <button className="btn bg-[#FE5A1C] hover:bg-[#e04f19] border-none join-item text-white">
              Subscribe
            </button>
          </div>
        </nav>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} - All right reserved by EventMaster
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
