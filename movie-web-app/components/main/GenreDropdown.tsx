"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getMovieGenres } from "@/utils/get-data";

export function GenreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      const res = await getMovieGenres();
      setGenres(res.genres);
    }
    fetchGenres();
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-9 h-9 sm:w-[97px] sm:h-[36px]">
          <div className="flex items-center justify-center sm:gap-2">
            <ChevronDown />
            <span className="sm:block hidden">Genre</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="sm:w-[537px] sm:p-[20px] w-[100vw] p-5"
        align="start"
      >
        <div className="sm:w-[213px] w-full sm:h-[60px] h-full flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold">Genres</h1>
          <p>See list of movies by genre</p>
        </div>
        <DropdownMenuSeparator className="w-full" />
        <DropdownMenuItem className="w-full flex flex-wrap gap-4 hover:!bg-transparent p-0">
          {genres.map((genre) => (
            <Link
              href={`/genre?id=${genre.id}&name=${genre.name}`}
              key={genre.id}
              onClick={() => setIsOpen(false)}
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
