import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <div className={css.container_header}>
          <Link to="/" className={css.link_header}>
            Home
          </Link>
          <Link to="/movies" className={css.link_header}>
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
