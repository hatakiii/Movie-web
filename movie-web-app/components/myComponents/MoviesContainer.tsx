import React from "react";

export const MoviesContainer = () => {
  const movieArray = [
    {
      movieName: "Dear Santa",
      rating: "6/10",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BZTFlY2FmZmMtZDliNy00YWI5LWEzMTItNzZlZGMwYzI2YTQ1XkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "How to Train Your Dragon (Live Action)",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BZTMxZjA0ZGUtZTE1NC00N2YxLWJlMTctZjkxNzQ1ZTY4NmM0XkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Alien: Romulus",
      rating: "7/10",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BZTc1Njc1MTAtZGU2OC00NjY0LWI5MDEtOTBlMmVhZjE4NTQyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "From the Ashes",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BY2RlOTBiODctMmY2NC00YTUyLWExZTMtMzI5MDc5YmI0MmRmXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Space Dogg",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BZmRjMWM3MTAtNjg0NS00MjY3LWIwZTAtOTlkYTY4N2JlNjk5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "The Order",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BNjhkZmMwMTctM2QxOC00NjhhLThlODktYzc1OTJhNTAyNTAwXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Y2K",
      rating: "6.5/10",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BYzU1NDM2ZTMtNThmMy00OTk2LWE1ZjUtNDYzMTYwNGQzY2UyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Solo Leveling: ReAwakening",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BNWZhMWFlZWMtNmE4MC00OGQwLThjOTQtNzI2NmE4ODVhMWYwXkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Get Away",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BMTI3YjU0ZWEtOWU0OS00ZmU4LThhZTUtMzA2ZTYwOTJlOGI3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      movieName: "Sonic the Hedgehog 3",
      rating: "N/A",
      movieURL:
        "https://m.media-amazon.com/images/M/MV5BNjEwMmQ4ZTItZGI2Yi00M2U3LTk0M2ItMjM1YjNjN2Y5Mzg3XkEyXkFqcGc@._V1_.jpg",
    },
  ];

  return (
    <div className="w-[1437px] h-[978px] flex flex-col ">
      <div className="w-[100%] h-[36px] flex place-content-around items-center px-[80px] mb-[32px]">
        <span className="w-[114px] h-[32px]">Upcoming</span>
        <button className="w-[120px] h-[36px]">See more</button>
      </div>
      <div className="w-[1277px] h-[910px] px-[80px] gap-[32px]">
        {/* {movieArray.map((movie, index) => {})} */}
      </div>
    </div>
  );
};
