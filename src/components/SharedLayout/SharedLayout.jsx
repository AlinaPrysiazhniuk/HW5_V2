import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <div className={css.container_header}>
          <NavLink
            to="/"
            //className={css.link_header}
            className={({ isActive }) =>
              isActive ? css.active : css.link_header
            }
            //activeClassName={css.active}
            // style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            // className={css.link_header}
            className={({ isActive }) =>
              isActive ? css.active : css.link_header
            }
            // activeClassName={css.active}
            //style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Movies
          </NavLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
