import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import { MovieCarousel, MoviesContainer } from "@/components/myComponents";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

import Link from "next/link";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  console.log(upcomingMovies);

  return (
    <div className="">
      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer
        movieArray={upcomingMovies.results}
        categories={"Upcoming"}
      />
      <MoviesContainer
        movieArray={popularMovies.results}
        categories={"Popular"}
      />
      <MoviesContainer
        movieArray={topRatedMovies.results}
        categories={"Top Rated"}
      />
      {/* <MoviesContainer movieArray={movieArray} categories={"Popular"} />
      <MoviesContainer movieArray={movieArray} categories={"Top Rated"} /> */}
    </div>
  );
}
