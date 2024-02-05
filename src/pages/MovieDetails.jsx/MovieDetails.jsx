import { getMovieDetails } from 'components/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(error => {
        throw new Error(
          'woops, something went wromg... Please, try agin later.'
        );
      });
  }, [movieId]);

  const { title, overview, vote_average, genres, poster_path } = movie;

  return (
    <section>
      <>
        <h1>{title}</h1>
        <img
          src={
            poster_path ? (
              `https://image.tmdb.org/t/p/w200/${poster_path}`
            ) : (
              <div>noPhoto</div>
            )
          }
          alt=""
        />
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        {genres && (
          <>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    </section>
  );
};

export default MovieDetails;
