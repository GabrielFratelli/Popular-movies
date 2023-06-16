import { Link, useParams } from "react-router-dom";
import { SummaryPage, Summary, Details } from "./styles";
import { useEffect, useState, useCallback } from "react";
import { api } from "../../service/api";
import { image_path } from "../../config/image-path";
import { MovieProps } from "./types";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import classNames from "classnames";

export function MovieSummary() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps>();
  const inspectClassName = classNames("MovieSummary");

  const getMovies = useCallback(async () => {
    const result = await api.get(`/movie/${id}`, { params: { page: 2 } });
    setMovie(result.data);
  }, [id]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
