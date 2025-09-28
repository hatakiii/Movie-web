import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { getMovieGenres } from "@/utils/get-data";
import { getSearchedMovies } from "@/utils/get-data";
import { SearcedMoviesType } from "@/types";
import { MovieCard } from "@/components/myComponents/MovieCard";

import { MoviePaginationSearch } from "@/components/myComponents/MoviePaginationSearch";

type SearchPageProps = {
  searchParams: Promise<{
    value: string;
    page: string;
    name: string;
    id: string;
  }>;
};

const page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const value = params.value;

  const page = params.page || "1";

  const genresResponse = await getMovieGenres();

  const searchedMovies: SearcedMoviesType = await getSearchedMovies(
    value,
    page
  );
  // console.log("Oldson kinonuud", searchedMovies);
  return (
    <div className="max-w-[1280px] min-h-[894px] flex flex-col gap-8 ">
      <h1 className="max-w-[1280px] h-9 text-text-text-foreground text-3xl font-semibold">
        Search Results
      </h1>
      <div className="max-w-[1280px] min-h-[826px]  md:flex-row flex-col">
        {/* Movie cards section */}
        <div className="max-w-[804px] h-full flex flex-col sm:grid-cols-3 gap-6">
          <p className="col-span-full text-lg font-medium mb-2">
            {searchedMovies.total_results} results for {value}
          </p>
          <div className="flex flex-wrap gap-8">
            {searchedMovies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
                id={movie.id}
                classStyle="w-[157.5px] sm:w-[165px] h-[309.1px] sm:h-[331px] gap-5"
              />
            ))}
          </div>

          <MoviePaginationSearch
            whichPage="SearchPage"
            totalResults={searchedMovies.total_results}
            searchValue={value}
            pageIndex={searchedMovies.page}
            perPage={20}
          />
        </div>
        {/* Column separator */}
        <div className="hidden md:flex items-center space-x-4">
          <Separator orientation="vertical" className="h-20" />
        </div>
        {/* Search by genre */}
        <div className="max-w-[387px] min-h-[352px] ml-7">
          <div className="max-w-[213px] min-h-[60px] mb-5">
            <h1 className="text-text-text-foreground text-2xl font-semibold leading-loose">
              Search by genre
            </h1>
            <p className="text-text-text-foreground text-base font-normal leading-normal">
              See lists of movies by genre
            </p>
          </div>

          <div className="max-w-[387px]  flex flex-wrap gap-4 hover:!bg-transparent p-0">
            {genresResponse.genres.map(
              (genre: { id: number; name: string }) => (
                <Link
                  href={`/genre?id=${genre.id}&name=${genre.name}`}
                  key={genre.id}
                >
                  <Badge
                    variant="outline"
                    className="h-[20px] active:bg-[rgba(0,0,0,0.4)]"
                  >
                    {genre.name}
                    <ChevronRight />
                  </Badge>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
