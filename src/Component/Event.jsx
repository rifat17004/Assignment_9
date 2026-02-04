import React from "react";
import BookAllEvent from "./BookAllEvent";
import { useLoaderData } from "react-router";

const Event = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-5xl font-bold">All event</h1>
      <div>
        {data.map((d) => (
          <BookAllEvent key={d.id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default Event;
