import React from "react";
import AllEventsDisplay from "./AllEventsDisplay";

const UpcommingEvent = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Upcomming events</h1>
      <h1 className="text-5xl">
        Latest <span className="font-bold">Awesome Events</span>
      </h1>
      <div className=" grid grid-cols-12 gap-4 my-25">
        <div className=" col-span-5 ml-8 text-justify ">
          <h1 className="text-2xl mb-5">We are Demo</h1>
          <h1 className="text-6xl font-bold mb-5">
            No.1 Events <br /> <span className="mb-5">Management</span>
          </h1>
          <p className="my-8">
            From concept to cleanup, we manage every detail of <br /> your
            special event, ensuring a seamless, stress-free,
            <br /> and unforgettable celebration today.
          </p>
          <button className="btn btn-block mt-10 bg-amber-600 text-amber-50">
            Learn More About Our Event
          </button>
        </div>
        <div className=" col-span-7  ">
          <div className="grid grid-cols-3  gap-0.5">
            {data.slice(0, 6).map((d) => (
              <AllEventsDisplay key={d.id} d={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvent;
