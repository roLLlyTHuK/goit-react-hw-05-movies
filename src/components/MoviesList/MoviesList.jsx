import { Link, useLocation } from 'react-router-dom';
import { INIT_POSTER_SIZE_500, INIT_PATH_IMAGE } from 'services/Api-request';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('movies :>> ', movies);
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      {movies &&
        movies.map(item => (
          <li key={item.id} style={{ width: '250px' }}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {/* {item.title} */}
              <img
                src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${item.poster_path}`}
                width="250"
                alt={item.title}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
