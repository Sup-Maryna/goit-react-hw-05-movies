import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as API from '../../services/Api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesView({ keyword }) {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('query');

  // fetch by first query
  useEffect(() => {
    if (query === '') {
      return;
    }
    API.getMoviesByQuery(query)
      .then(r => r.results)
      .then(setSearched);
  }, [query]);

  // fetch by go back
  useEffect(() => {
    if (search === null) {
      return;
    }
    API.getMoviesByQuery(search)
      .then(r => r.results)
      .then(setSearched);
  }, [search]);

  const handleFormSubmit = keyWord => {
    setQuery(keyWord);
    navigate({ ...location, search: `query=${keyWord}` });
  };
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {searched && <MoviesList movies={searched} />}
    </>
  );
}
