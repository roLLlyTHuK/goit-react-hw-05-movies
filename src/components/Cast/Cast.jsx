import { getMovieCredits, INIT_POSTER_SIZE_92, INIT_PATH_IMAGE, DEFAULT_CAST_PATH } from "services/Api-request";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Item } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const getCast = async (id, abortController) => {
      try {
        const result = await getMovieCredits(id, abortController);
        setCast(result.data.cast);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getCast(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {cast && cast.length ?(
        <ul>
          {cast.map(item => (
            <Item key={item.id}>
              {item.profile_path && (
                <img src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_92}${item.profile_path}`} alt={item.name} />
              )}
               {!item.profile_path && (
                <img src={DEFAULT_CAST_PATH} alt={item.name} />
              )}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </Item>
          ))}
        </ul>
      ) : (
             <p> We don`t find any cast for this move</p>
          )
      }
    </div>
  );
};
export default Cast;