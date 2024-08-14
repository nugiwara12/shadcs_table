import React from "react";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div>
        <div className="relative w-full max-w-md mx-auto p-4">
          <input
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            type="text"
          />
          <BiSearch className="absolute top-1/2 left-7 transform -translate-y-1/2 text-gray-400 text-sm md:text-base" />
        </div>
      </div>
    </>
  );
};

export default Search;
