import React from "react";
import EventCart from "./EventCart";

const EventDetailsLayout = ({ data }) => {
  return (
    <div>
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm text-gray-500 uppercase tracking-widest">
            Latest Events
          </span>
        </div>
      </div>
      <h1 className="text-4xl mb-4">
        <span className="font-bold">Event</span> listing
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {data.map((d) => (
          <EventCart key={d.id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default EventDetailsLayout;
