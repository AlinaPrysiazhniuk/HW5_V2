/* eslint-disable no-undef */
// import { useState, useEffect } from 'react';
// import { getSearchMovie } from 'components/Api';
import SearchBar from 'components/SearchBar/SearchBar';
// import {
//   Link,
//   useSearchParams,
//   useLocation,
//   useHistory,
// } from 'react-router-dom';

const Movie = ({ onSubmit }) => {
  return (
    <>
      <div>Movies List</div>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
};

export default Movie;
