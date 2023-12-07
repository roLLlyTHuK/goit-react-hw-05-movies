import { searchMovies } from 'services/Api-request';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();

  const onSubmit = searchString => {
    const searchParams = searchString !== '' ? { search: searchString } : {};
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const searchString = searchParams.get('search');

    if (!searchString) {
      return;
    }

    const searchList = async (searchString, abortController) => {
      try {
        const list = await searchMovies(searchString, abortController);
        setMovies(list.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    searchList(searchString, abortController);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  return (
    <main>
      <SearchForm onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
