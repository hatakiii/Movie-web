export type MovieType = {
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

export type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export type MovieDetailType = {
  title: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string },
    { id: number; name: string }
  ];
  homepage: string;
  id: number;
  imdb_id: string;

  overview: string;

  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];

  release_date: string;
  runtime: number;

  vote_average: number;
  vote_count: number;
};

export type CrewType = {
  id: number;
  name: string;
  known_for_department: string;
};

export type MovieCreditType = {
  cast: CrewType[];
  crew: CrewType[];
  id: number;
};
export type ResultsType = {
  poster_path: string;
  vote_average: number;
  title: string;
  id: number;
};

export type SimilarMovieType = {
  results: ResultsType[];
};

type trailerType = {
  key: string;
};

export type MovieTrailerType = {
  id: number;
  results: trailerType[];
};

export type SearchedMovieResultsType = {
  poster_path: string;
  vote_average: number;
  title: string;
  id: number;
};

export type SearcedMoviesType = {
  page: number;
  results: SearchedMovieResultsType[];
  total_pages: number;
  total_results: number;
};
