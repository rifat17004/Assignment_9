import React from "react";

const BookAllEvent = ({ d }) => {
  const {
    id,
    name,
    thumbnail,
    category,
    date,
    start_time,
    end_time,
    location,
    entry_fee,
    description,
  } = d;

  return (
    <div className=" mt-8">
      <div className="card lg:card-side bg-base-100 rounded-none  border border-gray-100 overflow-hidden">
        {/* 1. Image Section */}
        <figure className="lg:w-1/3 relative">
          <img
            src={thumbnail}
            alt="Tech Conference"
            className="h-full w-full object-cover"
          />
          {/* Category Badge */}
          <div className="absolute h-16 top-36  badge badge-secondary bg-[#FE5A1C]/60 border-none text-white font-bold p-3 rounded-none">
            {category}
          </div>
        </figure>

        {/* 2. Content Section */}
        <div className="card-body lg:w-2/3 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="card-title text-3xl font-extrabold text-gray-800">
                {name}
              </h2>
              <p className="text-gray-500 mt-2 line-clamp-2 p-4">
                {description}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold whitespace-nowrap text-[#FE8116]">
                ৳ {entry_fee}
              </span>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                Entry Fee
              </p>
            </div>
          </div>

          <div className="divider my-2"></div>

          {/* 3. Meta Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-orange-50 p-2 rounded-lg text-[#FE5A1C]">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm">{date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-orange-50 p-2 rounded-lg text-[#FE5A1C]">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm">
                {start_time} - {end_time}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-orange-50 p-2 rounded-lg text-[#FE5A1C]">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm truncate">{location}</span>
            </div>
          </div>

          {/* 4. Action Button */}
          <div className="card-actions justify-end mt-6">
            <button className="btn bg-gradient-to-r from-[#FE5A1C] to-[#FFBF00] border-none text-white px-8 hover:scale-105 transition-transform">
              View Event Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAllEvent;
