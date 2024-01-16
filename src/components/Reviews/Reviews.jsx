import { getMovieReviews } from 'services/Api-request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import List, { Container } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const getReviews = async (id, abortController) => {
      try {
        const result = await getMovieReviews(id, abortController);
        setReviews(result.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getReviews(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {reviews && reviews.length ? (
        <List>
          {reviews.map(item => (
            <li key={item.id}>
              <span>{item.author}</span>
              <div>
                <b>Posted at: </b>
                {new Date(item.updated_at).toLocaleDateString()}
              </div>
              <div>{item.content}</div>
            </li>
          ))}
        </List>
      ) : (
        <p>We don`t have any reviews for this move</p>
      )}
    </Container>
  );
};

export default Reviews;
