import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Back } from 'components/Back/Back';
import { toast } from 'react-toastify';
import { getMovieDetails, INIT_PATH_IMAGE } from 'services/Api-request';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const path = `original/${details?.backdrop_path}`;

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
    <main
      style={{
        background: `url(${INIT_PATH_IMAGE}${path}) center/cover no-repeat`,
        margin: '0',
        padding: '0',
        minHeight: '93vh',
        minWidth: '95vw',
        overflow: 'auto',
      }}
    >
      {details && (
        <div>
          <Back to={backLinkRef.current} />
          <MovieDetails details={details} />
        </div>
      )}
    </main>
  );
};

export default MovieDetailsPage;
