import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MovieCard } from "@/components/myComponents/MovieCard";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieTrailer,
  getSimilarMovies,
} from "@/utils/get-data";
import {
  MovieCreditType,
  MovieDetailType,
  MovieTrailerType,
  SimilarMovieType,
} from "@/types";

import { GoStarFill } from "react-icons/go";
import { TrailerDialog } from "@/components/trailer/TrailerDialog";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetails(id);

  return {
    title: `MovieZ | ${movieDetailData.title}`,
  };
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetail: MovieDetailType = await getMovieDetails(id);
  const movieCredits: MovieCreditType = await getMovieCredits(id);
  const similarMovies: SimilarMovieType = await getSimilarMovies(id, "1");
  const movieTrailer: MovieTrailerType = await getMovieTrailer(id);

  // console.log("TRAILER", movieTrailer);

  const trailer = movieTrailer.results.filter((trail) =>
    trail.type.includes("Trailer")
  );

  // console.log("trailer", trailer);

  const director = movieCredits.crew.find(
    (person) => person.known_for_department === "Directing"
  );
  const writer = movieCredits.crew.filter(
    (person) => person.known_for_department === "Writing"
  );

  return (
    <div>
      <div className="max-w-[1080px] min-h-[524px] flex flex-col mt-[52px]">
        <div className="min-w-[100%] min-h-[72px] flex justify-between">
          <div className="min-w-[211px] min-h-[72px]">
            <p className="text-text-text-foreground text-4xl font-bold leading-10">
              {movieDetail.title}
            </p>
            <h1 className="text-text-text-foreground text-lg font-normal leading-7">
              {movieDetail.release_date} · PG · {movieDetail.runtime}m
            </h1>
          </div>
          <div className="min-w-[83px] min-h-[64px]">
            <p className="w-[83px] h-[16px] text-text-text-foreground text-xs font-medium">
              Rating
            </p>
            <div className="w-[83px] h-[48px] flex gap-1">
              <div className="w-7 h-12 flex items-center justify-center">
                <GoStarFill className="w-[28px] h-[28px] text-amber-300" />
              </div>

              <div>
                <p className="text-text-text-muted-foreground text-base font-normal ">
                  <span className="text-text-text-foreground text-lg font-semibold leading-7 ">
                    {movieDetail.vote_average.toFixed(1)}
                  </span>
                  /10
                </p>
                <h1 className="text-text-text-muted-foreground text-xs font-normal text/text-muted-foreground">
                  {(movieDetail.vote_count / 1000).toFixed(0)}k
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Movie posters */}
        <div className="w-full h-[428px] flex justify-between mt-6">
          <div className="w-[290px] h-[428px] ">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
              alt={movieDetail.poster_path}
              width={290}
              height={428}
            />
          </div>
          <div className="w-[760px] h-[428px] relative">
            <Image
              width={760}
              height={428}
              alt={movieDetail.backdrop_path}
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
            />
            {/* There was Dialog */}
            <TrailerDialog YTkey={trailer[0]?.key}>
              {
                <div
                  className="w-[174px] h-[40px] absolute left-6 bottom-6 flex justify-between items-center"
                  aria-controls="radix-_R_kpbn5ritqlb_"
                >
                  <MdOutlinePlayCircleFilled className="w-10 h-10" />
                  <p className="w-20 h-6 text-white text-base font-normal align-middle justify-center">
                    Play trailer
                  </p>
                  <p className="w-7.5 h-5 text-white text-sm font-normal align-middle justify-center"></p>
                </div>
              }
            </TrailerDialog>
            {/* End of Dialog */}
          </div>
        </div>
      </div>
      {/* Description section */}
      <div className="max-w-[1080px] min-h-[271px] mt-8">
        <div className="w-full h-5 flex gap-3">
          {movieDetail.genres.map((genre) => {
            return <Badge key={genre.id}>{genre.name}</Badge>;
          })}
        </div>
        <p
          className="w-full min-h-12 mt-5 text-text-text-foreground text-base font-normal
"
        >
          {movieDetail.overview}
        </p>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className=" h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7">
            Director
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            {director ? (
              <span>{director.name}</span>
            ) : (
              <span>No director found.</span>
            )}
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className="w-[64px] h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7 ">
            Writers
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            {writer ? (
              <span>
                {writer.slice(0, 3).map((person, i) => (
                  <span key={i}>{person.name} · </span>
                ))}{" "}
              </span>
            ) : (
              <span>No writer found.</span>
            )}
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
        <div className="w-full h-[41px] mt-5 flex">
          <h1 className="w-[64px] h-full mr-[53px] text-text-text-foreground text-base font-bold leading-7 ">
            Stars
          </h1>
          <p className="w-full h-full text-text-text-foreground text-base font-normal">
            {movieCredits.cast.slice(0, 3).map((star, i) => (
              <span key={i}>{star.name} · </span>
            ))}
          </p>
        </div>
        <div className="w-full h-[9px] flex">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>
      </div>
      {/* More Like This */}
      <div className="max-w-[1080px] min-h-[440px] mt-8">
        <div className="w-full h-[36px] flex place-content-between items-center mb-[32px]">
          <span className="w-full h-[32px] justify-start text-text-text-foreground text-2xl font-semibold leading-loose flex items-center">
            More like this
          </span>
          <Link href={`/moreLikeThis/${id}`}>
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
        {/* Movie Card Section */}
        <div className="max-w-[1080px] min-h-[372px] gap-8 flex">
          {similarMovies.results.slice(0, 5).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
              id={movie.id}
              classStyle="w-[190px] h-[372px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailDynamicPage;
