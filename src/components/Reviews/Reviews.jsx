import { getMovieReviews } from 'services/Api-request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

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
    <div>
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
    </div>
  );
};

export default Reviews;
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: black;
    background-color: rgba(255, 165, 0, 0.2);
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px lightgray;
    padding: 10px 10px;
    transition: 0.3s;
    width: 600px;
    span {
      font-weight: 500;
      font-size: 20px;
    }
    div {
      padding: 5px;
      margin: 0;
      text-align: justify;
      word-wrap: break-word;
    }
  }
`;
