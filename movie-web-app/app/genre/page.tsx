import { MovieCard } from "@/components/myComponents/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log("FILTERDSEN KINONUUD", filteredMoviesResponse);
  return (
    <div className="px-20">
      {name}
      <div className="w-[1277px] flex flex-wrap gap-8">
        {filteredMoviesResponse.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            classStyle=""
          />
        ))}
      </div>
    </div>
  );
};

export default Genre;
