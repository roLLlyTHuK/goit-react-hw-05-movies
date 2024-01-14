import React, { useState } from 'react';
import { Container, ErrorText } from './SearchForm.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchForm = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setSearchString(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchString.trim() === '') {
      setError('Search string is required');
      return;
    }

    onSubmit(searchString.trim());
    setError('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchString"
          value={searchString}
          onChange={handleChange}
          placeholder="Search movie"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
