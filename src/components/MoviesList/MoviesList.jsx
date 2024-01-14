import { Link, useLocation } from 'react-router-dom';
import { INIT_POSTER_SIZE_500, INIT_PATH_IMAGE } from 'services/Api-request';
import List from './MoviesList.styled';
import svg from '../../Img/No-Image-Placeholder.svg.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies &&
        movies.map(item => (
          <li key={item.id} style={{ width: '250px' }}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.poster_path && (
                <img
                  src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${item.poster_path}`}
                  width="250"
                  alt={item.title}
                />
              )}
              {!item.poster_path && (
                <div>
                  <img src={svg} alt={item.title} width={250} height={375} />
                </div>
              )}
            </Link>
          </li>
        ))}
    </List>
  );
};

export default MoviesList;
