import { getTrendingMovies } from 'components/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => {
        throw new Error(
          'woops, something went wromg... Please, try agin later.'
        );
      });
  }, []);

  return (
    <section>
      {movies && (
        <>
          <h2>Trending today</h2>

          <ul>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`movies/${id}`}>
                  <img
                    src={
                      poster_path ? (
                        `https://image.tmdb.org/t/p/w200/${poster_path}`
                      ) : (
                        <div>noPhoto</div>
                      )
                    }
                    alt={title}
                  />
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
export default Home;
