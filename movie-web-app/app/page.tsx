"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import {
  MovieCarousel,
  MovieHeader,
  MoviesContainer,
} from "@/components/myComponents";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <MovieHeader />

      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel />
      <MoviesContainer />
    </div>
  );
}
