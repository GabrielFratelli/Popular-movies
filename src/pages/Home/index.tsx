import { MoviePage, Movie, MovieList } from "./styles";
import { Title } from "../../components/Title";
import { api } from "../../service/api";
import { image_path } from "../../config/image-path";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoviesProps } from "./types";
import classNames from "classnames";

export function Home() {
  const inspectClassName = classNames("Home");
  const [movies, setMovies] = useState<MoviesProps[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    try {
      const result = await api.get("/movie/popular", { params: { page: 1 } });
      setMovies(result.data.results);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <MoviePage>
        <Title>Wait a moment we are looking..</Title>
      </MoviePage>
    );
  }

  if (error) {
    return (
      <MoviePage>
        <Title>Oops! we can't find the most popular movies right now..</Title>
      </MoviePage>
    );
  }

  return (
    <MoviePage className={inspectClassName}>
      <Title>Popular Movies</Title>
      <MovieList>
        {movies?.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/summary/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </MoviePage>
  );
}
