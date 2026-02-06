import React from "react";
import EventCart from "./EventCart";

const EventDetailsLayout = ({ data }) => {
  return (
    <div className="px-4 md:px-0">
      {/* Responsive heading size and alignment */}
      <h1 className="text-3xl md:text-4xl mb-10 text-center md:text-left">
        <span className="font-bold">Upcoming</span> Events
      </h1>

      {/* Grid: 1 column on mobile (default), 2 columns on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        {data?.map((d) => (
          <EventCart key={d.id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default EventDetailsLayout;
