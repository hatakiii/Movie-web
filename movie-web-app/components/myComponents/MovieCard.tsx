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
      <Card className={`bg-secondary p-0 overflow-hidden gap-2 ${classStyle}`}>
        <CardContent className="p-0 h-full w-full overflow-hidden flex justify-center items-center">
          <Image
            src={imgSrc || "no-image-1x1.5.png"}
            alt=""
            width={229}
            height={340}
            className="object-scale-down"
            onError={() => setImgSrc("/no-image-1x1.5.png")}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2 h-[95px]">
          <CardDescription className="flex gap-2">
            <FaStar color="#FDE047" />
            <span>{score}/10</span>
          </CardDescription>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
