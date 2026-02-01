import React, { use } from "react";
import UpcommingEvent from "./UpcommingEvent";
import { AuthContext } from "../Datasharing/AuthProvider";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto  my-20">
      <UpcommingEvent data={data} />
    </div>
  );
};

export default Home;
