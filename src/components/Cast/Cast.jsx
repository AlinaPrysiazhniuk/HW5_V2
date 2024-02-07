import { getCastsDetails } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noImage from '../../no-image.jpeg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastsDetails(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => {
        throw new Error('oops...');
      });
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : noImage
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information about casts</p>
      )}
    </>
  );
};

export default Cast;
