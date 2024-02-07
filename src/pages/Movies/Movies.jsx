/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'components/Api';
import SearchBar from 'components/SearchBar/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import noImage from '../../no-image.jpeg';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getSearchMovie(searchQuery)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => {
        throw new Error('...ooopppsssss');
      });
  }, [searchQuery]);

  const onSubmit = searchQuery => {
    setSearchParams({ query: `${searchQuery}` });
  };

  return (
    <>
      <div>Movies List</div>
      <SearchBar onSearch={onSubmit} />

      {movies && (
        <>
          <ul>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                        : noImage
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
    </>
  );
};

export default Movie;
