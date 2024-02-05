import { getCastsDetails } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      {cast && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path ? (
                    `https://image.tmdb.org/t/p/w200/${profile_path}`
                  ) : (
                    <div>noPhoto</div>
                  )
                }
                alt=""
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
