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
    <div className="w-full h-[600px] overflow-hidden">
      <Carousel
        plugins={[autoplay.current]}
        setApi={setApi}
        className="w-full h-full relative overflow-hidden"
      >
        <CarouselContent>
          {movies
            .slice(0, 16)
            .filter((movie, index) => index !== 0)
            .map((movie, index) => (
              <MovieCarouselItem
                movie={movie}
                key={index}
                autoplay={autoplay}
              />
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-11" />
        <CarouselNext className="right-11" />
        {/* Dots indicator */}
        <div className="absolute bottom-[37px] left-[calc(45.5%)] flex gap-2">
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
      <CarouselItem className="basis-full flex-shrink-0 relative">
        <Link
          className="w-full h-[600px] object-cover"
          href={`/details/${movie.id}`}
        >
          <Image
            className="w-full h-[600px] object-cover"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            width={1440}
            height={600}
          />
        </Link>
        {/* Movie Description Overlay */}
        {/* Desktop overlay (hidden on mobile) */}
        <div className="hidden md:block absolute bottom-[158px] left-[140px] text-white w-[404px] h-[264px] rounded-2xl">
          <MovieDescription
            movie={movie}
            trailerKey={trailerKey}
            autoplay={autoplay}
          />
        </div>

        {/* Mobile description (shown below the image) */}
        <div className="block md:hidden absolute p-4 bg-black text-white">
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
  <>
    <div className="w-full h-[24px] text-base font-normal leading-normal">
      Now Playing:
    </div>
    <div className="w-full min-h-[40px] text-2xl md:text-4xl font-bold leading-tight">
      {movie.title}
    </div>
    <div className="w-full min-h-[48px] text-sm opacity-80 flex items-center gap-2">
      <Image
        src="star.svg"
        alt="star"
        className="pt-2 pb-3"
        width={28}
        height={28}
      />
      {movie.vote_average.toFixed(1)}
    </div>
    <p className="w-full py-4 text-xs md:text-sm font-normal leading-snug">
      {movie.overview}
    </p>

    <TrailerDialog
      YTkey={trailerKey}
      onOpenChange={(open) => {
        if (open) autoplay.current?.stop();
        else autoplay.current?.play();
      }}
    >
      <div className="w-[145px] h-[40px] bg-white text-black rounded-2xl flex gap-2 items-center justify-center cursor-pointer">
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
  </>
);
