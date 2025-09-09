import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";

export const MovieCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const movieArray = [
    {
      movieName: "movie1",
      movieURL:
        "https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg",
    },
    {
      movieName: "movie2",
      movieURL:
        "https://img.freepik.com/free-photo/movie-background-collage_23-2149876005.jpg",
    },
    {
      movieName: "movie3",
      movieURL:
        "https://img.pikbest.com/back_our/bg/20191113/bg/33b89a9cc567a.png!sw800",
    },
    {
      movieName: "movie4",
      movieURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4QrrJzIFcjkc22TBtH6snj4HwB-0znwPSA&s",
    },
    {
      movieName: "movie5",
      movieURL:
        "https://thumbs.dreamstime.com/b/film-background-red-bright-glow-47382510.jpg",
    },
  ];
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full overflow-hidden">
        <CarouselContent>
          {movieArray.map((movie, index) => (
            <CarouselItem key={index}>
              <img
                className="w-full object-cover"
                src={movie.movieURL}
                alt="film"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
};
