import { MovieCard } from "@/components/myComponents/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";
import { getMovieGenres } from "@/utils/get-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MoviePagination } from "@/components/myComponents/MoviePagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const name = params.name; // //localhost:3000/genre?id=27&name=Horror endees Horror geder neriig ni avch bfa
  const genresResponse = await getMovieGenres();

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  console.log("FILTERDSEN KINONUUD", filteredMoviesResponse);
  return (
    <div className="w-[1280px] px-20 flex flex-col">
      <div className="w-full h-[36px] text-text-text-foreground text-3xl font-semibold">
        Search filter
      </div>
      {/* genres and it's movies */}
      <div className="max-w-[1280px] min-h-[826px]  flex">
        {/* Search by genre */}
        <div className="min-w-[387px] min-h-[352px]">
          <div className="min-w-[213px] min-h-[60px]">
            <h1 className="text-text-text-foreground text-2xl font-semibold leading-loose">
              Genres
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
        {/* Column separator */}
        <div className="flex items-center space-x-4">
          <Separator orientation="vertical" className="h-20" />
        </div>

        {/* 5 results for "" */}
        <div className="w-[816px] h-full flex flex-col sm:grid-cols-3 gap-6">
          <p className="col-span-full text-lg font-medium mb-2">
            {filteredMoviesResponse.total_results} titles in "{name}"
          </p>
          <div className="flex flex-wrap gap-4">
            {filteredMoviesResponse.results.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
                id={movie.id}
                classStyle="w-[165px] h-[331px]"
              />
            ))}
          </div>

          <MoviePagination
            whichPage="genre"
            totalResults={filteredMoviesResponse.total_results}
            whichId={id}
            whichName={name}
            pageIndex={filteredMoviesResponse.page}
            perPage={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Genre;
