import React from "react";

import { Search } from "lucide-react";

import { ModeToggle } from "@/components/myComponents/ThemeToggler";

import { GenreDropdown } from "@/components/main";
import { SearchSection } from "./SearchSection";
import Link from "next/link";
import { TbMovie } from "react-icons/tb";

export const MovieHeader = () => {
  return (
    <header className="w-[100vw]  h-[59px]  flex justify-center items-center">
      <div className="w-[100%] max-w-[1280px] h-[36px] flex place-content-between items-center mx-20">
        <Link href={`/`} className="flex gap-2 w-[92px] h-[20px]">
          <div className="hidden sm:flex gap-2 w-[92px] h-[20px] items-center justify-center">
            <TbMovie className="w-6 h-6 text-indigo-700" />

            <p className="text-indigo-700 text-base font-bold leading-tight tracking-tight whitespace-nowrap">
              Movie Z
            </p>
          </div>
        </Link>

        <div className="flex gap-5 mt-6">
          <GenreDropdown />

          <div className="flex items-center">
            <Search className="-mr-8 -mt-6" />
            <SearchSection />
          </div>
          {/* <Input className="pl-10" placeholder="Search.." /> */}
        </div>
        <div className="w-9 h-9">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
