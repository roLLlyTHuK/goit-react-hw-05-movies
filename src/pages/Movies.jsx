import { searchMovies, upcomingMovies } from 'services/Api-request';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import Gallery from 'components/Gallery/Gallery';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [upcoming, setUpcoming] = useState();
  const [dates, setDates] = useState({ maximum: '', minimum: '' });
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = searchString => {
    const searchParams = searchString !== '' ? { search: searchString } : {};
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const searchString = searchParams.get('search');

    if (!searchString) {
      const upcomingList = async abortController => {
        try {
          const list = await upcomingMovies(abortController);
          setUpcoming(list.data.results);
          setDates(list.data.dates);
        } catch (error) {
          if (error.message !== 'canceled') toast.error(error.message);
        }
      };

      upcomingList(abortController);
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
      {upcoming && (
        <div>
          <h1 style={{ textAlign: 'center' }}>
            Movies that are being released
          </h1>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>
            in {dates.minimum} - {dates.maximum} :
          </p>
          <Gallery movies={upcoming} />
        </div>
      )}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
