import React from "react";
import Search from "./search";
import Layout_Switch from "./layout_switch";
import Sort from "./sort";
import Select from "./select/page";

const Filtering_Heading = () => {
  return (
    <>
      <div className="flex p-4 items-center">
        <div className="flex items-center w-full">
          <Search />
        </div>
        <div className="flex items-center w-full justify-end space-x-5">
          <Layout_Switch />
          <Sort />
          <Select />
        </div>
      </div>
    </>
  );
};

export default Filtering_Heading;
