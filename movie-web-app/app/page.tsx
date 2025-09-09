"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import { MovieCarousel, MovieHeader } from "@/components/myComponents";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Button>GG</Button>
      <MovieHeader />

      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel />
    </div>
  );
}
