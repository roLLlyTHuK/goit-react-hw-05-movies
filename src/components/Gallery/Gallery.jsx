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
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {movies &&
          movies.map(item => (
            <Item key={item.id} style={{ width: '250px' }}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.poster_path && (
                  <img
                    src={`${INIT_PATH_IMAGE}${INIT_POSTER_SIZE_500}${item.poster_path}`}
                    alt={item.title}
                  />
                )}
                {!item.poster_path && (
                  <div>
                    <img src={svg} alt={item.title} width={250} height={375} />
                  </div>
                )}
              </Link>
            </Item>
          ))}
      </Slider>
    </Container>
  );
};

export default Gallery;
