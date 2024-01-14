import { getTrending } from 'services/Api-request';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getMovies = async abortController => {
      try {
        const result = await getTrending(abortController);
        setTrending(result.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getMovies(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Trending today:</h1>
      <MoviesList movies={trending} />
    </main>
  );
};

export default Home;
