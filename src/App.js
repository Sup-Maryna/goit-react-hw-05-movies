import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';

const Home = lazy(() => import('./routes/Home/Home' /* webpackChunkName: "home-view" */));
const NotFound = lazy(() =>
  import('./views/NoteFound/NoteFound.jsx' /* webpackChunkName: "not-found-view" */),
);
const Movies = lazy(() => import('./views/Movies/Movies' /* webpackChunkName: "movies-view" */));
const FilmDetails = lazy(() =>
  import('./views/FilmDetails/FilmDetails' /* webpackChunkName: "film-details-view" */),
);
const Cast = lazy(() => import('./components/Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('./components/Reviews/Reviews' /* webpackChunkName: "cast" */));

export default function App() {
  return (
    <Container>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:filmId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
