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
  return (
    <Link href={`/details/${id}`}>
      <Card
        className={`lg:w-[229.73px] lg:h-[429px] bg-secondary p-0 overflow-hidden gap-2 ${classStyle}`}
      >
        <CardContent className="p-0 h-full w-full overflow-hidden flex justify-center items-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={229}
            height={340}
            className="object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2 h-[95px]">
          <CardDescription className="flex gap-2">
            <FaStar color="#FDE047" />
            <span>{score}/10</span>
          </CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
