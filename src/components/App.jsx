import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails /> }>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
};
