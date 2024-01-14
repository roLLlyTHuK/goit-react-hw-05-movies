import React from 'react';
import { getMovieTrailers } from 'services/Api-request';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Container from './Trailer.styled';
function Trailer() {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const getTrailer = async (id, abortController) => {
      try {
        const result = await getMovieTrailers(id, abortController);
        setTrailer(result.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getTrailer(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);
  return (
    <Container>
      {trailer && trailer.length ? (
        <iframe
          src={
            'https://www.youtube.com/embed/' +
            trailer.find(item => item.type === 'Trailer').key
          }
          title={trailer.find(item => item.type === 'Trailer').name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>We don`t have any trailer for this movie</p>
      )}
    </Container>
  );
}

export default Trailer;
