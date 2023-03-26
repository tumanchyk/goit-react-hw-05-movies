import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieItem from 'pages/MovieItem/MovieItem';
import Layout from './Layout/Layout';
import Cast from './MovieCast/MovieCast';
import Review from './MovieReviews/MovieReviews';

export const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='movies' element={<Movies />}/>
      <Route path='movies/:id' element={<MovieItem />}>
        <Route path='cast' element={<Cast />}/>
        <Route path='reviews' element={<Review />}/>
      </Route>
      <Route path="*" element={<p>Nothing not found</p>} />
    </Route>
    </Routes>
  );
};
