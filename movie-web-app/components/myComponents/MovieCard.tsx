"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  id: number;
  classStyle: string;
};

export const MovieCard = ({
  title,
  score,
  image,
  id,
  classStyle,
}: MovieCardProps) => {
  const [imgSrc, setImgSrc] = React.useState(
    `https://image.tmdb.org/t/p/w500${image}`
  );
  return (
    <Link href={`/details/${id}`}>
      <Card
        className={`bg-secondary p-0 overflow-hidden gap-2 transition-transform duration-300 hover:-translate-y-1 ${classStyle}`}
      >
        <CardContent className="p-0 h-full w-full overflow-hidden flex justify-center items-center">
          <Image
            src={imgSrc || "no-image-1x1.5.png"}
            alt=""
            width={229}
            height={340}
            className="object-cover w-full h-full"
            onError={() => setImgSrc("/no-image-1x1.5.png")}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-3 sm:p-3.5 h-[100px] sm:h-[110px]">
          <CardDescription className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
            <FaStar color="#FDE047" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{score.toFixed(1)}/10</span>
          </CardDescription>
          <CardTitle className="line-clamp-2 mt-1 text-sm sm:text-base font-semibold leading-snug tracking-tight">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
