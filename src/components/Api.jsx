import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '19d2d0f24e837c8f3ad6ea805c1086b1';

export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieDetails = movieId => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};
