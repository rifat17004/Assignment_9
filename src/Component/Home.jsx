import React, { use } from "react";
import UpcommingEvent from "./UpcommingEvent";
import { AuthContext } from "../Datasharing/AuthProvider";
import { useLoaderData } from "react-router";
import EventDetailsLayout from "./EventDetailsLayout";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto  my-20">
      <EventDetailsLayout data={data} />
      <div className="flex flex-col w-full border-opacity-50 px-10 my-20">
        <div className="divider divider-start font-bold text-gray-400 before:bg-gray-100 after:bg-gray-100">
          DISCOVER MORE
        </div>
      </div>
      <UpcommingEvent data={data} />
    </div>
  );
};

export default Home;
