import React from "react";
import AllEventsDisplay from "./AllEventsDisplay";

const UpcommingEvent = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8">
      <h1 className="text-3xl md:text-5xl mt-10 md:mt-20 text-center">
        Latest <span className="font-bold">Awesome Events</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 my-10 w-full max-w-7xl">
        <div className="col-span-1 lg:col-span-5 text-center lg:text-justify order-2 lg:order-1">
          <h1 className="text-xl md:text-2xl mb-5">We are Demo</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            No.1 Events <br className="hidden md:block" />
            <span className="mb-5">Management</span>
          </h1>
          <p className="my-8 text-gray-600">
            From concept to cleanup, we manage every detail of your special
            event, ensuring a seamless, stress-free, and unforgettable
            celebration today.
          </p>
          <button className="btn btn-block mt-4 lg:mt-10 bg-amber-600 text-amber-50 border-none">
            Learn More About Our Event
          </button>
        </div>

        <div className="col-span-1 lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-0.5">
            {data.slice(0, 6)?.map((d) => (
              <AllEventsDisplay key={d.id} d={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvent;
