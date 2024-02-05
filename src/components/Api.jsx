import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '19d2d0f24e837c8f3ad6ea805c1086b1';
const BASE_IMG_URL = '"https://image.tmdb.org/t/p/w300';

export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export default BASE_IMG_URL;
