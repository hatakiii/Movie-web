"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function OptionPopover() {
  const [selected, setSelected] = useState("Genre");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[97px] h-[36px] justify-between px-3"
        >
          <ChevronDown className="w-4 h-4 shrink-0 opacity-60" />
          {selected}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        <div className="flex flex-col gap-1">
          {["Option 1", "Option 2", "Option 3"].map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className="w-full text-left px-2 py-1 rounded-md hover:bg-gray-100"
            >
              {opt}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
