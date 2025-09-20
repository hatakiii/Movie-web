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

type MovieCarouselProps = {
  movies: MovieType[];
};

export const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
        plugins={[
          Autoplay({
            delay: 3000, // autoplay every 3s
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="w-full h-full relative overflow-hidden"
      >
        <CarouselContent>
          {movies
            .slice(0, 15)
            .filter((movie, index) => index !== 7 && index !== 13)
            .map((movie, index) => (
              // There was Carousel item
              <MovieCarouselItem movie={movie} key={index} />
              //The end of carousel item
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-11" />
        <CarouselNext className="right-11" />
        {/* Dots indicator */}
        <div className="absolute bottom-[37px]  left-[calc(45.5%)] flex gap-2">
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

const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  // const getTrailerData = async () => {
  //   const movieTrailer: MovieTrailerType = await getMovieTrailer(id);
    
  //     // console.log("TRAILER", movieTrailer);
    
  //     const za = movieTrailer.results.filter((trail: any) =>
  //       trail.type.includes("Trailer")
  //     );
  // }
  return (
    <CarouselItem className="basis-full flex-shrink-0 relative">
      <Link
        className="w-full h-[600px] object-cover"
        href={`/details/${movie.id}`}
      >
        <img
          className="w-full h-[600px] object-cover"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      </Link>
      {/* Movie Description Overlay */}
      <div className="absolute bottom-[158px] left-[140px] text-white w-[404px] h-[264px] rounded-2xl ">
        <div className="w-full h-[24px] text-white text-base font-normal leading-normal">
          Now Playing:
        </div>
        <div className="w-full min-h-[40px] justify-start text-white text-4xl font-bold leading-10">
          {movie.title}
        </div>
        <div className="w-full min-h-[48px] text-sm opacity-80 flex justify-start items-center">
          <img src="star.svg" alt="star" className="pt-2 pb-3" />
          {movie.vote_average}
        </div>
        <p className="w-[302px] min-h-20 py-4 justify-start items-start text-neutral-50 text-xs font-normal leading-none">
          {movie.overview}
        </p>
        <button className="w-[145px] h-[40px] bg-white text-black rounded-2xl flex gap-2 items-center justify-center">
          <img src="play.svg" alt="play" className="w-4 h-4" />
          <span className="text-sm font-medium">Watch Trailer</span>
        </button>
      </div>
    </CarouselItem>
  );
};
