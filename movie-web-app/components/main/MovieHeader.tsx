"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { ModeToggle } from "@/components/myComponents/ThemeToggler";
import { GenreDropdown } from "@/components/main";
import { SearchSection } from "./SearchSection";
import Link from "next/link";
import { TbMovie } from "react-icons/tb";

export const MovieHeader = () => {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <>
      {/* In Mobile View */}
      <header className="w-[100vw] h-[59px] flex justify-center items-center sm:hidden">
        <div className="w-full max-w-[1280px] h-[36px] flex justify-between items-center mx-5">
          {/* LEFT: Logo */}
          {!searchMode && (
            <Link href={`/`} className="flex gap-2 items-center w-[92px]">
              <TbMovie className="w-6 h-6 text-indigo-700" />
              <p className="text-indigo-700 text-base font-bold leading-tight tracking-tight whitespace-nowrap">
                Movie Z
              </p>
            </Link>
          )}

          {/* CENTER: Search + Genre when active */}
          <div className="flex items-center gap-5 overflow-visible">
            {searchMode && (
              <div className="flex flex-row items-center gap-3 w-full sm:w-auto overflow-visible">
                {/* Genre Dropdown */}
                <div className="flex items-center justify-center ">
                  <GenreDropdown />
                </div>

                {/* Search box */}
                <div className="flex items-center border rounded-lg sm:px-2 h-[36px] w-full sm:w-auto overflow-hidden relative">
                  <Search className="w-5 h-5  text-muted-foreground absolute left-[10px] top-[8px]" />
                  <SearchSection />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSearchMode(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Search + Theme toggler in one div */}
          {!searchMode && (
            <div className="flex items-center justify-between w-[84px] h-[36px] rounded-lg">
              {/* Search Button */}
              <button
                onClick={() => setSearchMode(true)}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggler */}
              <div className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <ModeToggle />
              </div>
            </div>
          )}
        </div>
      </header>
      {/* In Desktop View */}
      <header className="hidden w-[100vw] h-[59px] sm:flex justify-center items-center">
        <div className="w-[100%] max-w-[1280px] h-[36px] flex place-content-between items-center mx-20">
          <Link href={`/`} className="flex gap-2 w-[92px] h-[20px]">
            <div className="flex gap-2 w-[92px] h-[20px] items-center justify-center">
              <TbMovie className="w-6 h-6 text-indigo-700" />
              <p className="text-indigo-700 text-base font-bold leading-tight tracking-tight whitespace-nowrap">
                Movie Z
              </p>
            </div>
          </Link>

          <div className="flex gap-5 items-center h-9">
            <GenreDropdown />
            <div className="flex items-center mr-3 h-9">
              <Search className="-mr-8  shrink-0" />
              <SearchSection />
            </div>
            {/* <Input className="pl-10" placeholder="Search.." /> */}
          </div>

          <div className="w-9 h-9">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};
