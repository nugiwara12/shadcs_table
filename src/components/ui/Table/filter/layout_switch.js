"use client";

import React, { useState } from "react";
import { GrList } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";

const Layout_Switch = () => {
  // State to track which button is active
  const [activeButton, setActiveButton] = useState("");

  // Handle button click
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleButtonClick("dashboard")}
        className={`p-2 rounded-full transition-colors ${
          activeButton === "dashboard" ? "bg-sky-400" : "bg-gray-100"
        } hover:bg-sku-500`}>
        <RxDashboard
          className={`h-5 w-5 ${
            activeButton === "dashboard" ? "text-white" : "text-gray-500"
          }`}
        />
      </button>
      <button
        onClick={() => handleButtonClick("list")}
        className={`p-2 rounded-full transition-colors ${
          activeButton === "list" ? "bg-sky-400" : "bg-gray-100"
        } hover:bg-gray-200`}>
        <GrList
          className={`h-5 w-5 ${
            activeButton === "list" ? "text-white" : "text-gray-500"
          }`}
        />
      </button>
    </div>
  );
};

export default Layout_Switch;
