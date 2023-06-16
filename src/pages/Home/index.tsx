import { Container, Movie, MovieList } from "./styles";
import { Title } from "../../components/Title";
import { api } from "../../service/api";
import { image_path } from "../../config/image-path";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoviesProps } from "./types";

export function Home() {
  const [movies, setMovies] = useState<MoviesProps[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getMovies = async () => {
    try {
      const result = await api.get("/movie/popular", { params: { page: 1 } });
      setMovies(result.data.results);
      setIsLoading(false);
    } catch (error) {
      setError("Oops! we couldn't find the most popular movies right now...");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return <p>Wait a moment we are looking ;)</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
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
    </Container>
  );
}
