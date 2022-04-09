import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [keyWord, setKeyWord] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (keyWord.trim() === '') {
      return;
    }
    onSubmit(keyWord);
  };

  const handleKeyWordChange = e => {
    setKeyWord(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleKeyWordChange}
        />
      </SearchForm>
    </>
  );
}
