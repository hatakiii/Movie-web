import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import { MovieCarousel, MoviesContainer } from "@/components/myComponents";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();

  console.log(upcomingMovies);

  return (
    <div className="">
      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel />
      <MoviesContainer
        movieArray={upcomingMovies.results}
        categories={"Upcoming"}
      />
      {/* <MoviesContainer movieArray={movieArray} categories={"Popular"} />
      <MoviesContainer movieArray={movieArray} categories={"Top Rated"} /> */}
    </div>
  );
}
