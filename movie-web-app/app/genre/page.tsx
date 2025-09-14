import { MovieCard } from "@/components/myComponents/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";

type GenrePageProps = {
  searchParams: Promise<{ id: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log("FILTERDSEN KINONUUD", filteredMoviesResponse);
  return (
    <div>
      {id}
      <div className="flex flex-wrap gap-3">
        {filteredMoviesResponse.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Genre;
