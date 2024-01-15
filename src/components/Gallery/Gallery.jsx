import { Link, useLocation } from 'react-router-dom';
import { INIT_POSTER_SIZE_500, INIT_PATH_IMAGE } from 'services/Api-request';
import svg from '../../Img/No-Image-Placeholder.svg.png';

import Slider from 'react-slick';
import { Container, Item } from './Gallery.styled';

// Import Swiper React components

const Gallery = ({ movies }) => {
  const location = useLocation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
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
      </Slider>
    </Container>
  );
};

export default Gallery;
