import React from "react";
import { SimilarMovieType } from "@/types";
import { getSimilarMovies } from "@/utils/get-data";
import { MovieCard } from "@/components/myComponents/MovieCard";
import { MoviePaginationMoreLikeThis } from "@/components/myComponents/MoviePaginationMoreLikeThis";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
};

const MoreLikeThisPage = async ({
  params,
  searchParams,
}: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const searchQuery = await searchParams;
  const id = dynamicParams.id;
  const page = searchQuery.page || "1";
  const similarMovies: SimilarMovieType = await getSimilarMovies(id, page);
  console.log("Similar movies More like this", similarMovies);
  return (
    <div className="flex flex-col justify-center items-center px-5">
      {/* Movie Card Section */}
      <div className="max-w-[1280px] min-h-[372px] gap-8 flex flex-wrap mb-8 justify-center items-center">
        {similarMovies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            id={movie.id}
            classStyle="w-[157.5px] sm:w-[229.73px] h-[309.1px] sm:h-[439px]"
          />
        ))}
      </div>
      <MoviePaginationMoreLikeThis
        id={id}
        totalResults={similarMovies.total_results}
        pageIndex={similarMovies.page}
        perPage={20}
      />
    </div>
  );
};

export default MoreLikeThisPage;
