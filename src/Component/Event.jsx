import React, { useState } from "react";
import BookAllEvent from "./BookAllEvent";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Event = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? data : data.slice(0, 4);
  return (
    <div className="w-11/12 mx-auto my-10">
      <Helmet>
        <title>Demo || Event</title>
      </Helmet>
      <h1 className="text-5xl font-bold">All event</h1>
      <div>
        {displayData.map((d) => (
          <BookAllEvent key={d.id} d={d} />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="btn btn-block my-5  bg-[#FE5A1C]/70"
      >
        {showAll ? "Show less" : "Show More"}
      </button>
      <div className="w-11/12 mx-auto flex my-5  justify-center">
        <fieldset className="fieldset ">
          <h1 className="text-5xl font-bold">Reserve Seat</h1>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Name</label>
          <input type="Text" className="input" placeholder="Your Name" />
          <button
            onClick={() => {
              alert(`Your Seat has been Reserve`);
            }}
            className="btn btn-neutral mt-4"
          >
            Submit
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Event;
