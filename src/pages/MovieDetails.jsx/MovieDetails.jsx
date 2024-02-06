import { getMovieDetails } from 'components/Api';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
//import Cast from 'components/Cast/Cast';

//import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  //const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
        <Link to={backLink}>Go back</Link>

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
        <p>User Score: {vote_average * 10}%</p>
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

        <Link to="cast">Casts</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </>
    </section>
  );
};

export default MovieDetails;
