import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";

const AllEventsDisplay = ({ d }) => {
  const { category, location } = d;

  return (
    <div class="group  flex-col p-5 bg-base-100 border border-gray-100 flex items-center hover:bg-[#FE8116] transition-all duration-300">
      <div class="group-hover:text-white"></div>

      <div class="card-body items-center text-center">
        <h2 class="card-title whitespace-nowrap text-2xl font-bold text-gray-800 tracking-tight group-hover:text-white transition-colors">
          {category}
        </h2>

        <p class="text-gray-400 mt-2 font-medium group-hover:text-white transition-colors">
          {location}
        </p>
      </div>
    </div>
  );
};

export default AllEventsDisplay;
