import * as API from '../../services/Api';
import { Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export default function Home() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    API.FetchTrendingFilms()
      .then(r => r.results)
      .then(setFilms);
  }, []);

  return (
    <>
      <Title>TOP 20 today</Title>
      {films && <MoviesList movies={films} />}
    </>
  );
}
