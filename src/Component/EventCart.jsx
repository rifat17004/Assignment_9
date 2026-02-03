import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventCart = ({ d }) => {
  console.log(d);
  const { name, thumbnail, entry_fee, start_time, end_time, location } = d;
  return (
    <div className="card lg:card-side bg-base-100   border border-gray-100 overflow-hidden max-w-2xl p-5 rounded-none">
      <figure className=" lg:w-5/12 lg:h-11/12">
        <img
          src={thumbnail}
          alt="Event"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body lg:w-1/2 p-8">
        <h2 className="card-title text-1xl whitespace-nowrap  font-extrabold text-gray-800 leading-tight">
          {name}
        </h2>

        <p className="text-[#FFBF00] font-bold text-lg mt-1">
          Tickets from {entry_fee} Taka
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-gray-100 p-2 rounded-full text-[#FFBF00]">
              <FaClock />
            </div>
            <span className="font-medium">
              Start {start_time}-{end_time}
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-gray-100 p-2 rounded-full text-[#FFBF00]">
              <FaMapMarkerAlt />
            </div>
            <span className="font-medium truncate">{location}</span>
          </div>
        </div>
        <div className="card-actions mt-8">
          <button className="btn btn-ghost bg-gray-100 hover:bg-gray-200 text-gray-600 border-none rounded-full w-full uppercase tracking-widest font-bold">
            Tickets & Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCart;
