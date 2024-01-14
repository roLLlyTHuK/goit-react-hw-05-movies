import { BiArrowBack } from 'react-icons/bi';
import { BackLink, Container } from './Back.styled';

export const Back = ({ to }) => {
  return (
    <Container>
      <BackLink to={to}>
        <BiArrowBack size="24" />
        Go back
      </BackLink>
    </Container>
  );
};
