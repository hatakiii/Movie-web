import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

import { ModeToggle } from "@/components/myComponents/ThemeToggler";

import { GenreDropdown } from "../main";

export const MovieHeader = () => {
  return (
    <header className="w-[100vw]  h-[59px]  flex justify-center items-center">
      <div className="w-[100%] max-w-[1280px] h-[36px] flex place-content-between items-center mx-20">
        <div className="flex gap-2 w-[92px] h-[20px]">
          <img src="film.svg" alt="film logo" />
          <span>Movie Z</span>
        </div>
        <div className="w-[488px] h-[36px] flex gap-3">
          <GenreDropdown />
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 w-[379px] h-[36px] bg-white">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-sm"
            />
          </div>
        </div>
        <div className="w-9 h-9">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
