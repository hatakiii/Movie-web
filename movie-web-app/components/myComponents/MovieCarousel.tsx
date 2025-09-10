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

export const MovieCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const movieArray = [
    {
      movieName: "Wicked",
      rating: "6.9/10",
      description:
        "Elphaba, a misunderstood young woman with green skin, and Glinda, a popular girl, become friends at Shiz University. Their friendship is tested after meeting the Wizard of Oz.",
      movieURL:
        "https://bhpcollectibles.com/wp-content/uploads/2024/11/IMG_2419-scaled.jpg",
    },
    {
      movieName: "Gladiator",
      rating: "8.5/10",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      movieURL:
        "https://cdn.prod.website-files.com/61947db4da3d1c274b89af16/65090d729356cfba3434bb2a_Best%20Picture%20Rankdown%202.png",
    },
    {
      movieName: "Moana 2",
      rating: "N/A",
      description:
        "Moana sets sail once again on a new adventure beyond the reef, meeting new allies and facing greater challenges to save her people.",
      movieURL:
        "https://bhpcollectibles.com/wp-content/uploads/2024/07/IMG_2275-scaled.jpg",
    },
  ];

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
          {movieArray.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex-shrink-0 relative"
            >
              <img
                className="w-full h-[600px] object-cover"
                src={movie.movieURL}
                alt={movie.movieName}
              />
              {/* Movie Description Overlay */}
              <div className="absolute bottom-[158px] left-[140px] text-white w-[404px] h-[264px] rounded-2xl ">
                <div className="w-[404px] h-[24px] text-white text-base font-normal leading-normal">
                  Now Playing:
                </div>
                <div className="w-[404px] h-[40px] justify-start text-white text-4xl font-bold leading-10">
                  {movie.movieName}
                </div>
                <div className="w-[83px] h-[48px] text-sm opacity-80 flex justify-start items-center">
                  <img src="star.svg" alt="star" className="pt-2 pb-3" />
                  {movie.rating}
                </div>
                <p className="w-[302px] h-[80px] py-4 justify-start items-start text-neutral-50 text-xs font-normal leading-none">
                  {movie.description}
                </p>
                <button className="w-[145px] h-[40px] bg-white text-black rounded-2xl flex gap-2 items-center justify-center">
                  <img src="play.svg" alt="play" className="w-4 h-4" />
                  <span className="text-sm font-medium">Watch Trailer</span>
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-11" />
        <CarouselNext className="right-11" />
        {/* Dots indicator */}
        <div className="absolute bottom-[37px] left-1/2 flex gap-2">
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
