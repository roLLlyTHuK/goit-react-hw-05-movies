import {
  INIT_PATH_IMAGE,
  INIT_POSTER_SIZE_500,
  DEFAULT_POSTER_PATH,
} from 'services/Api-request';
import { List, WrapperMovie } from './MovieDetails.styled';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieDetails = ({ details }) => {
  return (
    <WrapperMovie>
      <div>
        {details.poster_path && (
          <img
            src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${details.poster_path}`}
            alt={details.name}
          />
        )}
        {!details.poster_path && (
          <img src={DEFAULT_POSTER_PATH} alt={details.name} />
        )}
      </div>
      <div>
        <h1>
          {details.title} ({details.release_date.split('-')[0]})
        </h1>
        <p className="rating">
          User's rating: <span>{details.vote_average.toFixed(2)}</span>{' '}
        </p>
        <h2>Overview:</h2>
        <p>{details.overview}</p>
        <h2>
          Genres:{' '}
          <span>{details.genres.map(genre => genre.name).join(', ')}</span>
        </h2>
        <p></p>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="trailer">Trailer</Link>
          </li>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </WrapperMovie>
  );
};
