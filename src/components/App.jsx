import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

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
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
