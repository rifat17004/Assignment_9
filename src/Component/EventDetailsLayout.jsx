import React from "react";
import EventCart from "./EventCart";

const EventDetailsLayout = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl mb-10">
        <span className="font-bold">Upcoming</span> Events
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
