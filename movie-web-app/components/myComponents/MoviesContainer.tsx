import React from "react";
import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieType } from "@/types";

export const MoviesContainer = ({
  movieArray,
  categories,
}: {
  movieArray: MovieType[];
  categories: string;
}) => {
  return (
    <div className="w-[100vw] h-full flex flex-col mt-[52px]">
      <div className="w-[100%] h-[36px] flex place-content-between items-center px-[80px] mb-[32px]">
        <span className="w-[114px] h-[32px] justify-start text-text-text-foreground text-2xl font-semibold leading-loose flex items-center">
          {categories}
        </span>
        <button className="w-[120px] h-[36px] gap-2 flex justify-start text-text-text-foreground text-sm font-medium leading-tight">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right-icon lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="w-[100%] h-full px-[80px] gap-[32px] flex flex-wrap">
        {movieArray.slice(0, 16).map((movie) => (
          <div key={movie.id}>
            <Card className="w-[230px] h-[429px] bg-secondary p-0 overflow-hidden gap-2">
              <CardContent className="p-0 h-[340px] overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={230}
                  height={340}
                />
              </CardContent>

              <CardFooter className="flex flex-col items-start p-2 h-[95px]">
                <CardDescription className="flex gap-2">
                  <img src="star.svg" alt="star" className="w-4 h-4 pt-[2px]" />
                  <span>{movie.vote_average}</span>
                </CardDescription>
                <CardTitle>{movie.title}</CardTitle>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
