import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as API from '../../components/SearchBar/SearchBar';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    if (query === '') {
      return;
    }
    API.FetchSearchingFilms(query)
      .then(r => r.results)
      .then(setSearched);
  }, [query]);

  useEffect(() => {
    if (search === null) {
      return;
    }
    API.FetchSearchingFilms(search)
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
