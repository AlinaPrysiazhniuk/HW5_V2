/* eslint-disable no-undef */
import { useState } from 'react';

const SearchBar = () => {
  const [movie, setMovie] = useState('');

  const handleChangeQuery = e => {
    setMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movie.trim() === '') {
      return alert('Enter data for search');
    }

    onSubmit(movie);
    setMovie('');
    console.log(movie);
  };

  const onSubmit = e => {
    setMovie(movie);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          value={movie}
          onChange={handleChangeQuery}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
