import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white pt-16">
      <Helmet>
        <title>Demo || About</title>
      </Helmet>
      <section className="w-11/12 mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#FE5A1C] font-bold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 leading-tight">
            Turning Your <span className="text-[#FE5A1C]">Visions</span> into
            Reality.
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Founded in 2020, we have grown from a small team of enthusiasts to
            the leading event management platform in the region. We believe that
            every gathering—from massive tech conferences to intimate
            weddings—deserves to be flawless, memorable, and stress-free.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/event"
              className="btn bg-[#FE5A1C] border-none text-white px-8 rounded-full"
            >
              Explore Events
            </Link>
            <button className="btn btn-outline border-gray-300 px-8 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/mkMHr06/event-010.jpg"
            alt="Event Planning"
            className="rounded-3xl shadow-2xl z-10 relative"
          />

          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-orange-100 rounded-full -z-0"></div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-black text-[#FE5A1C]">500+</h3>
            <p className="text-gray-500 font-medium">Events Hosted</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-[#FE5A1C]">50k+</h3>
            <p className="text-gray-500 font-medium">Tickets Sold</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-[#FE5A1C]">120+</h3>
            <p className="text-gray-500 font-medium">Global Venues</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-[#FE5A1C]">4.9/5</h3>
            <p className="text-gray-500 font-medium">User Rating</p>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FE5A1C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Innovation</h4>
            <p className="text-gray-600">
              We utilize cutting-edge technology to provide smooth booking and
              live updates for all attendees.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FE5A1C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Reliability</h4>
            <p className="text-gray-600">
              Your events are safe with us. We ensure 24/7 support and secure
              payment processing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FE5A1C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Community</h4>
            <p className="text-gray-600">
              We don’t just manage events; we build communities and create
              lasting connections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
