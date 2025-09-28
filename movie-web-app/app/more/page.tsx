import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { MoviePaginationMorePage } from "@/components/myComponents/MoviePaginationMorePage";

type MorePageProps = {
  searchParams: Promise<{ title: string; page: number }>;
};

const MorePage = async ({ searchParams }: MorePageProps) => {
  const params = await searchParams;
  const title = params.title;
  const page = params.page || "1";

  const movieRes: movieResponseType = await getMoviesList(title, page);
  // console.log("movieRes", movieRes);
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
                <Image src="star.svg" alt="star" width={16} height={16} />
                <span>{movie.vote_average}</span>
              </CardDescription>
              <CardTitle>{movie.title}</CardTitle>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <MoviePaginationMorePage
        title={title}
        totalResults={movieRes.total_results}
        pageIndex={movieRes.page}
        perPage={20}
      />
    </div>
  );
};

export default MorePage;
