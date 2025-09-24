import { MovieCard } from "@/components/myComponents/MovieCard";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type MorePageProps = {
  searchParams: Promise<{ title: string }>;
};

const MorePage = async ({ searchParams }: MorePageProps) => {
  const params = await searchParams;
  const title = params.title;

  const movieRes: movieResponseType = await getMoviesList(title);
  console.log("movieRes", movieRes);
  return (
    <div className="w-full h-full px-[80px] gap-8 flex flex-wrap">
      {movieRes.results.map((movie) => (
        <Link href={`/details/${movie.id}`} key={movie.id}>
          <Card className="w-[229.73px] h-[429px] bg-secondary p-0 overflow-hidden gap-2">
            <CardContent className="p-0 h-[340px] overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={230}
                height={340}
              />
            </CardContent>

            <CardFooter className="flex flex-col items-start p-2 h-[95px]">
              <CardDescription className="flex gap-2">
                <img src="star.svg" alt="star" className="w-4 h-4 pt-[2px]" />
                <span>{movie.vote_average}</span>
              </CardDescription>
              <CardTitle>{movie.title}</CardTitle>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default MorePage;
