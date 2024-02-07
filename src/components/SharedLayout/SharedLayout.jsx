import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

let activeClassName = {
  color: '#2196f3',
};

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <div className={css.container_header}>
          <Link
            to="/"
            className={css.link_header}
            // style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={css.link_header}
            //style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Movies
          </Link>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
