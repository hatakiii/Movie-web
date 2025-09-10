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

const genres = [
  "Action",
  "Addventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export function GenreDropdown() {
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

        <DropdownMenuItem className="w-[497px] flex flex-wrap gap-4">
          {genres.map((genre, index) => (
            <Link href="/genre" key={index}>
              <Badge variant="outline" className="h-[20px]">
                {genre}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
