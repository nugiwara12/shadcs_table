import React from "react";
import Timetracker from "@/components/ui/Table/timetracker";
import Filter_Heading from "@/components/ui/Table/filter/page";

const page = () => {
  return (
    <>
      <div className="flex flex-col p-10 bg-gray-100">
        <h2>Time Tracker</h2>
        <div className="mt-10 flex flex-col w-full h-full bg-white">
          <Filter_Heading />
          <Timetracker />
        </div>
      </div>
    </>
  );
};

export default page;
