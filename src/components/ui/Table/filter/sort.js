"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiChevronDown, BiChevronUp } from "react-icons/bi"; // Import icons

// Define the items to be used in the dropdown
const items = [
  { label: "Date", value: "date" },
  { label: "Time In", value: "time_in" },
  { label: "Break In", value: "break_in" },
  { label: "Break Out", value: "break_out" },
  { label: "Time Out", value: "time_out" },
  { label: "Created Date", value: "created_at" },
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Find the label for the selected item
  const selectedLabel =
    items.find((item) => item.value === selectedItem)?.label ||
    "Select Sort Option";

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative flex items-center">
          <p className="text-sm mr-1">Sort By:</p>
          <button
            className="flex items-center px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
          >
            {selectedLabel}
            <span className="ml-2">
              {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            </span>
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sorted Table By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={(value) => {
            setSelectedItem(value);
            setIsOpen(false); // Close dropdown on item select
          }}>
          {items.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.value}>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
