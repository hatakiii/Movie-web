import { MovieCarousel, MoviesContainer } from "@/components/myComponents";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList(
    "upcoming",
    "1"
  );
  const popularMovies: movieResponseType = await getMoviesList("popular", "1");
  const topRatedMovies: movieResponseType = await getMoviesList(
    "top_rated",
    "1"
  );
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing",
    "1"
  );

  // console.log(upcomingMovies);
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer
        movieArray={upcomingMovies.results}
        categories={"Upcoming"}
        link="upcoming"
      />
      <MoviesContainer
        movieArray={popularMovies.results}
        categories={"Popular"}
        link="popular"
      />
      <MoviesContainer
        movieArray={topRatedMovies.results}
        categories={"Top Rated"}
        link="top_rated"
      />
      {/* <MoviesContainer movieArray={movieArray} categories={"Popular"} />
      <MoviesContainer movieArray={movieArray} categories={"Top Rated"} /> */}
    </div>
  );
}
