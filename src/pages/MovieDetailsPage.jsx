import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Back } from 'components/Back/Back';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/Api-request';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const abortController = new AbortController();

    const getDetails = async (id, abortController) => {
      try {
        const result = await getMovieDetails(id, abortController);
        setDetails(result.data);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getDetails(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <main>
      {details && (
        <div>
          <Back to={backLinkRef.current} />
          <MovieDetails details={details} />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </main>
  );
};

export default MovieDetailsPage;