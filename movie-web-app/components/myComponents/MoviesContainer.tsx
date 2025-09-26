import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { MovieType } from "@/types";
import Link from "next/link";

export const MoviesContainer = ({
  movieArray,
  categories,
  link,
}: {
  movieArray: MovieType[];
  categories: string;
  link: string;
}) => {
  return (
    <div className="md:max-w-[1437px] w-[100vw] h-full flex flex-col mt-[52px] justify-center items-center">
      <div className="w-full h-[36px] flex place-content-between items-center px-[80px] mb-[32px]">
        <span className="w-[114px] h-[32px] justify-start text-text-text-foreground text-2xl font-semibold leading-loose flex items-center">
          {categories}
        </span>
        <Link href={`/more?title=${link}`}>
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
        </Link>
      </div>
      <div className="w-full h-full px-[80px] gap-8 flex flex-wrap">
        {movieArray.slice(0, 10).map((movie) => (
          <Link href={`/details/${movie.id}`} key={movie.id}>
            <Card className="md:w-[229.73px] md:h-[429px] w-[157.5px] h-[309.1px] bg-secondary p-0 overflow-hidden gap-2">
              <CardContent className="p-0 md:h-[340px] h-[233.1px] overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={229}
                  height={340}
                />
              </CardContent>

              <CardFooter className="flex flex-col items-start p-2 md:h-[95px] h-[76px]">
                <CardDescription className="flex gap-2">
                  <Image
                    src="star.svg"
                    alt="star"
                    className="w-4 h-4 pt-[2px]"
                    width={16}
                    height={16}
                  />
                  <span>{movie.vote_average}</span>
                </CardDescription>
                <CardTitle>{movie.title}</CardTitle>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
