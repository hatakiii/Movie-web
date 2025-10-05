"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { SearchSectionResult } from "./SearchSectionResult";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value, "1");
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  return (
    <div className="h-full">
      <Input
        value={searchValue}
        onChange={handleChange}
        onClick={() => setIsOpen(true)}
        className="pl-10 hidden sm:block"
        placeholder="Search.."
      />
      <Input
        value={searchValue}
        onChange={handleChange}
        onClick={() => setIsOpen(true)}
        className="sm:hidden flex w-full pl-10 min-w-0 h-[36px] bg-transparent outline-none border-none"
        placeholder="Search..."
      />
      <div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent
            className="sm:w-[577px] w-[100vw]"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <Link
                  href={`/details/${movie.id}`}
                  key={movie.id}
                  passHref
                  onClick={() => {
                    setIsOpen(false);
                    setSearchValue("");
                  }}
                >
                  <SearchSectionResult
                    title={movie.title}
                    score={movie.vote_average.toFixed(1)}
                    releaseYear={movie.release_date.split("-")[0]}
                    image={movie.poster_path}
                  />
                </Link>
              );
            })}

            <Link
              href={`/searchPage?value=${searchValue}`}
              onClick={() => {
                setIsOpen(false);
                setSearchValue("");
              }}
            >
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
