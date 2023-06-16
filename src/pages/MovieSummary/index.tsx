import { Link, useParams } from "react-router-dom";
import { Processing, SummaryPage, Summary, Details } from "./styles";
import { useEffect, useState, useCallback } from "react";
import { api } from "../../service/api";
import { image_path } from "../../config/image-path";
import { MovieProps } from "./types";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import classNames from "classnames";

export function MovieSummary() {
  const { id } = useParams();
  const inspectClassName = classNames("MovieSummary");
  const [movie, setMovie] = useState<MovieProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = useCallback(async () => {
    try {
      const result = await api.get(`/movie/${id}`, { params: { page: 2 } });
      setMovie(result.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (isLoading) {
    return (
      <Processing>
        <Title>Searching movie summary information..</Title>
      </Processing>
    );
  }

  if (error) {
    return (
      <Processing>
        <Title>I couldn't find the summary of the movie..</Title>
      </Processing>
    );
  }

  return (
    <SummaryPage className={inspectClassName}>
      <Summary>
        <img src={`${image_path}${movie?.poster_path}`} alt={movie?.overview} />
        <Details>
          <Title>{movie?.title}</Title>
          <span className="movie-sinopse">Sinopse:</span>
          <p className="sinopse-paragraph">{movie?.overview}</p>
          <span className="release-date">
            Release date: {movie?.release_date}
          </span>
          <Link to="/">
            <Button name={"Go Back"} />
          </Link>
        </Details>
      </Summary>
    </SummaryPage>
  );
}
