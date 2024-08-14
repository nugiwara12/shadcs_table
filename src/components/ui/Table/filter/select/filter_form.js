"use client";

import React from "react";
import { z } from "zod";


const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const Filter_form = () => {
  return (
    <>
      <div>Filter_form</div>
    </>
  );
};

export default Filter_form;
