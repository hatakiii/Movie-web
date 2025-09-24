import { MovieCarousel, MoviesContainer } from "@/components/myComponents";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
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
