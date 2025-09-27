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
    <div>
      <Input
        value={searchValue}
        onChange={handleChange}
        onClick={() => setIsOpen(true)}
        className="pl-10"
        placeholder="Search.."
      />
      <div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent
            className="w-[577px]"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <Link
                  href={`/details/${movie.id}`}
                  key={movie.id}
                  passHref
                  onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
