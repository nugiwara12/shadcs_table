import { GoFilter } from "react-icons/go";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Filter_form from "./filter_form";

const Drawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center">
          <button
            className="flex items-center justify-between px-5 py-1 text-sm font-medium text-white bg-sky-400 border border-transparent rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Filter options">
            <span className="flex-grow text-left">Filters</span>
            <GoFilter className="ml-2 h-4 w-5" />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            You can apply filters from this table. And data will automaticaly
            updated.
          </SheetDescription>
        </SheetHeader>
        <Filter_form />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
