import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails.jsx/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
