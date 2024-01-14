import React, { useState } from 'react';
import styled from 'styled-components';
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
        {error && <ErrorText>{error}</ErrorText>}
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    width: 100%;
    input {
      width: 300px;
      height: 30px;
      border-radius: 5px 0 0 5px;
      border: 1px solid gray;
      border-right: none;
      padding: 5px;
      font-size: 16px;
      background-color: transparent;
      outline: none;
      transition: 0.3s;
      &:focus {
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        transition: 0.3s;
        border: 1px solid orange;
        background-color: rgba(255, 165, 0, 0.2);
        color: orange;
      }
    }
    button {
      all: unset;
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: transparent;
      border: 1px solid gray;
      border-left: none;
      border-radius: 0 5px 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      color: black;
      &:hover {
        color: orange;
        transition: 0.3s;
        transform: scale(1.1);
        transform-origin: center;
        border-radius: 5px;
        border: 1px solid orange;
        padding: 5px;
        background-color: rgba(255, 165, 0, 0.2);
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        transition: 0.3s;
      }
    }
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  margin-top: 5px;
`;
