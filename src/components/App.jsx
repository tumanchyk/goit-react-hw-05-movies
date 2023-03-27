import { lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('../pages/Home/Home'));
const Movies = lazy(()=> import('../pages/Movies/Movies'))
const MovieItem = lazy(()=> import('../pages/MovieItem/MovieItem'))
const Cast = lazy(()=> import('./MovieCast/MovieCast'))
const Reviews = lazy(()=> import('./MovieReviews/MovieReviews'))

export const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='movies' element={<Movies />}/>
      <Route path='movies/:id' element={<MovieItem />}>
        <Route path='cast' element={<Cast />}/>
        <Route path='reviews' element={<Reviews />}/>
      </Route>
      <Route path="*" element={<Home />} />
    </Route>
    </Routes>
  );
};
