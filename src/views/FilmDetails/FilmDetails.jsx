import { useState, useEffect, lazy, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import * as API from '../../services/Api';

const FilmDataCard = lazy(() =>
  import('../../components/FilmDataCard/FilmDataCard' /* webpackChunkName: "film-data-card" */),
);

export default function FilmDetails() {
  const location = useLocation();
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    API.getMovieById(filmId).then(setFilm);
  }, [filmId]);

  useEffect(() => {
    if (!film) {
      return;
    }

    let names = film.genres;

    const string = names.map(name => name.name).join(', ');
    setGenres(string);
  }, [film]);

  return (
    <>
      <BackButton location={location} />
      <Suspense fallback={<h4>Loading film-data</h4>}>
        {film && <FilmDataCard film={film} genres={genres} />}
      </Suspense>
      <Outlet />
    </>
  );
}
