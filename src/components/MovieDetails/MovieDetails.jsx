import { INIT_PATH_IMAGE, INIT_POSTER_SIZE_500 } from 'services/Api-request';
import { List, Container } from './MovieDetails.styled';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import svg from '../../Img/No-Image-Placeholder.svg.png';
import ParallaxEffect from 'utils/ParallaxEffect';

export const MovieDetails = ({ details }) => {
  return (
    <Container>
      <ParallaxEffect>
        <div id="parallax-container">
          {details.poster_path && (
            <img
              src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${details.poster_path}`}
              alt={details.name}
            />
          )}
          {!details.poster_path && (
            <img src={svg} alt={details.name} width={500} />
          )}
        </div>
      </ParallaxEffect>

      <div>
        <div className="info">
          <h1>
            {details.title} ({details.release_date.split('-')[0]})
          </h1>
          <p className="rating">
            User's rating: <span>{Math.round(details.vote_average * 10)}%</span>
          </p>
          <h2>Overview:</h2>
          <p>{details.overview}</p>
          <h2>
            Genres:{' '}
            <span>{details.genres.map(genre => genre.name).join(', ')}</span>
          </h2>
        </div>
        <div>
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
      </div>
    </Container>
  );
};
