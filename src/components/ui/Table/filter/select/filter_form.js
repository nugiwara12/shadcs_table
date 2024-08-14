"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

// Define the dropdown items
const items = [
  { label: "Date", value: "date" },
  { label: "Time In", value: "time_in" },
  { label: "Break In", value: "break_in" },
  { label: "Break Out", value: "break_out" },
  { label: "Time Out", value: "time_out" },
  { label: "Created Date", value: "created_at" },
];

// Extract values to create a Zod schema
const validValues = items.map((item) => item.value);

// Define the form schema with Zod
const formSchema = z.object({
  status: z.enum(validValues).optional(), // Status is optional
});

// Export the form schema for reuse
export { formSchema };

// FilterForm Component
const FilterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "", // Default value for the status field
    },
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <div className="relative">
                  <input
                    placeholder="Select status"
                    {...field}
                    className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </FormControl>
              <FormDescription>
                Choose the status to filter the results.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default FilterForm;
