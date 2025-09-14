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
import { Input } from "../ui/input";

import { GenreDropdown } from "@/components/main";

export const MovieHeader = () => {
  return (
    <header className="w-[100vw]  h-[59px]  flex justify-center items-center">
      <div className="w-[100%] max-w-[1280px] h-[36px] flex place-content-between items-center mx-20">
        <div className="flex gap-2 w-[92px] h-[20px]">
          <img src="film.svg" alt="film logo" />
          <span>Movie Z</span>
        </div>
        <div className="flex gap-5">
          <GenreDropdown />
          <div className="flex items-center">
            <Search className="-mr-8" />
            <Input className="pl-10" placeholder="Search.." />
          </div>
        </div>
        <div className="w-9 h-9">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
