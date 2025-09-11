"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import {
  MovieCarousel,
  MovieHeader,
  MoviesContainer,
} from "@/components/myComponents";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();

  console.log(upcomingMovies);

  const movieArray = [
    {
      movieName: "Dear Santa",
      rating: "6/10",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BMDNjMzcxNTEtODRjYi00MGQ4LWE3YjAtNjllYzE1OThmZmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      movieName: "How to Train Your Dragon (Live Action)",
      rating: "N/A",
      movieURL:
        "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
    },
    {
      movieName: "Alien: Romulus",
      rating: "7/10",
      movieURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Alien_Romulus_2024_%28poster%29.jpg/250px-Alien_Romulus_2024_%28poster%29.jpg",
    },
    {
      movieName: "From the Ashes",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Space Dogg",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BNjM1MzhhYjUtZGNlNy00MzUxLWI0ZDAtZjhlMDY5NDAxODZkXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "The Order",
      rating: "N/A",
      movieURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Order_2024_film_poster.jpg",
    },
    {
      movieName: "Y2K",
      rating: "6.5/10",
      movieURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Y2k_2024_movie.jpeg/250px-Y2k_2024_movie.jpeg",
    },
    {
      movieName: "Solo Leveling: ReAwakening",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BM2M4YzdkMTEtMjUyYy00ZWY0LWI5ODQtNGRkZWQ1MzU5MWM2XkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Get Away",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BM2Y0YmZiN2EtMWMzZi00M2UzLWJlYzAtZDZlMzk2ZDg3Y2FhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Sonic the Hedgehog 3",
      rating: "N/A",
      movieURL:
        "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg",
    },
  ];
  return (
    <div className="">
      {/* <Link href="./genre">Genre luu shiljine</Link> */}
      <MovieCarousel />
      <MoviesContainer movieArray={movieArray} categories={"Upcoming"} />
      <MoviesContainer movieArray={movieArray} categories={"Popular"} />
      <MoviesContainer movieArray={movieArray} categories={"Top Rated"} />
    </div>
  );
}
