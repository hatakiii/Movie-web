"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MovieType } from "@/types";
import Link from "next/link";
import { MovieTrailerType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";
import { TrailerDialog } from "../trailer/TrailerDialog";
import Image from "next/image";

type MovieCarouselProps = {
  movies: MovieType[];
};

export const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const autoplay = React.useRef<ReturnType<typeof Autoplay>>(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-[100vw] sm:h-full">
      <Carousel
        plugins={[autoplay.current]}
        setApi={setApi}
        className="w-full h-full sm:relative overflow-hidden"
      >
        <CarouselContent>
          {movies
            .slice(0, 15)

            .map((movie, index) => (
              <MovieCarouselItem
                movie={movie}
                key={index}
                autoplay={autoplay}
              />
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-11" />
        <CarouselNext className="hidden sm:flex right-11" />
        {/* Dots indicator */}
        <div className="sm:absolute sm:bottom-[37px] sm:top-[555px] hidden left-[calc(45.5%)] sm:flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index + 1 ? "bg-white" : "bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

const MovieCarouselItem = ({
  movie,
  autoplay,
}: {
  movie: MovieType;
  autoplay: React.RefObject<ReturnType<typeof Autoplay>>;
}) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const getTrailerData = async () => {
    const movieTrailer: MovieTrailerType = await getMovieTrailer(
      movie.id.toString()
    );

    const trailer = movieTrailer.results.filter((trail) =>
      trail.type.includes("Trailer")
    );
    // console.log("Mytrailer", trailer);
    setTrailerKey(trailer[0]?.key || "");
  };

  React.useEffect(() => {
    getTrailerData();
  });

  return (
    <>
      <CarouselItem className="basis-full flex-shrink-0 sm:relative">
        <Link
          className="w-full sm:h-[600px] min-h-[246px] object-cover"
          href={`/details/${movie.id}`}
        >
          <Image
            className="w-full sm:h-[600px] min-h-[246px] object-cover"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            width={1440}
            height={600}
          />
        </Link>
        {/* Movie Description Overlay */}

        <div className="sm:absolute bottom-[158px] left-[140px] dark:text-white w-[404px]  rounded-2xl">
          <MovieDescription
            movie={movie}
            trailerKey={trailerKey}
            autoplay={autoplay}
          />
        </div>
      </CarouselItem>
    </>
  );
};

const MovieDescription = ({
  movie,
  trailerKey,
  autoplay,
}: {
  movie: MovieType;
  trailerKey: string;
  autoplay: React.RefObject<ReturnType<typeof Autoplay>>;
}) => (
  <div className="md:p-0 p-5 sm:w-[404px] w-[100vw] sm:h-[264px] ">
    <div className="flex sm:flex-col flex-row sm:items-baseline sm:min-w-[404px] max-w-[335px] sm:h-[112px] min-h-[52px] overflow-hidden">
      <div className="sm:max-w-[404px] max-w-[252px] sm:h-full h-13 flex-1">
        <div className="md:w-full sm:max-w-[404px] max-w-[252px] md:h-[24px] h-5 text-base font-normal leading-normal whitespace-nowrap">
          Now Playing:
        </div>

        <div className="text-2xl sm:text-4xl font-bold leading-tight">
          {movie.title}
        </div>
      </div>

      <div className="sm:w-full min-h-[48px] min-w-[83px] sm:text-sm opacity-80 flex items-center text-foreground text-lg font-semibold">
        <Image
          src="star.svg"
          alt="star"
          className="pt-2 pb-3 pr-2"
          width={28}
          height={28}
        />
        {movie.vote_average.toFixed(1)}
        <span className="text-text-text-muted-foreground text-base font-normal leading-normal">
          /10
        </span>
      </div>
    </div>

    <p className="sm:w-full max-w-[335px] h-20 sm:text-xs text-sm font-normal line-clamp-5">
      {movie.overview ? movie.overview : "No overview found"}
    </p>

    <TrailerDialog
      YTkey={trailerKey}
      onOpenChange={(open) => {
        if (open) autoplay.current?.stop();
        else autoplay.current?.play();
      }}
    >
      <div className="w-[145px] h-[40px] bg-white text-black rounded-2xl flex gap-2 items-center justify-center cursor-pointer mt-4">
        <Image
          src="play.svg"
          alt="play"
          className="w-4 h-4"
          width={16}
          height={16}
        />
        <span className="text-sm font-medium">Watch Trailer</span>
      </div>
    </TrailerDialog>
  </div>
);
