import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { getMovieGenres } from "@/utils/get-data";

const page = async () => {
  const genresResponse = await getMovieGenres();
  return (
    <div className="max-w-[1280px] min-h-[894px] flex flex-col gap-8 ">
      <h1 className="max-w-[1280px] h-9 text-text-text-foreground text-3xl font-semibold">
        Search Results
      </h1>
      <div className="max-w-[1280px] max-h-[826px] h-[826px] flex">
        {/* 5 results for "" */}
        <div className="w-[804px] h-full">
          <p># results for "###"</p>
        </div>
        {/* Column separator */}
        <div className="flex items-center space-x-4">
          <Separator orientation="vertical" className="h-20" />
        </div>
        {/* Search by genre */}
        <div className="min-w-[387px] min-h-[352px]">
          <div className="min-w-[213px] min-h-[60px]">
            <h1 className="text-text-text-foreground text-2xl font-semibold leading-loose">
              Search by genre
            </h1>
            <p className="text-text-text-foreground text-base font-normal leading-normal">
              See lists of movies by genre
            </p>
          </div>

          <div className="w-[387px]  flex flex-wrap gap-4 hover:!bg-transparent p-0">
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
