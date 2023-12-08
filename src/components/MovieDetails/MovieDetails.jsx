import { INIT_PATH_IMAGE, INIT_POSTER_SIZE_500, DEFAULT_POSTER_PATH } from 'services/Api-request';
import { WrapperMovie } from './MovieDetails.styled';

export const MovieDetails = ({ details }) => {
  return (
    <WrapperMovie>
      <div>
        {details.poster_path && (
          <img src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${details.poster_path}`} alt={details.name} />
        )}
        {!details.poster_path && (
          <img src={DEFAULT_POSTER_PATH} alt={details.name} />
        )}
      </div>
      <div>
        <h1>
          {details.title} ({details.release_date.split('-')[0]})
        </h1>
        <p>User Score: {Math.round(details.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{details.overview}</p>
        <h2>Genres</h2>
        <p>{details.genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </WrapperMovie>
  );
};

