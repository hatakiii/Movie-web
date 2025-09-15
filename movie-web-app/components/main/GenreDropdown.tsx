import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getMovieGenres } from "@/utils/get-data";

export async function GenreDropdown() {
  const genresResponse = await getMovieGenres();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[537px] p-[20px]" align="start">
        <div className="w-[213px] h-[60px] flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold w-[213px] h-[32px] flex items-center">
            Genres
          </h1>
          <p className="w-[213px] h-[24px] flex items-center">
            See list of movies by genre
          </p>
        </div>
        <div className="w-[497px] h-[33px] flex align-middle items-center">
          <DropdownMenuSeparator className="w-[100%]" />
        </div>

        <DropdownMenuItem className="w-[497px] flex flex-wrap gap-4 hover:!bg-transparent ">
          {genresResponse.genres.map((genre: { id: number; name: string }) => (
            <Link
              href={`/genre?id=${genre.id}&name=${genre.name}`}
              key={genre.id}
            >
              <Badge variant="outline" className="h-[20px]">
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
