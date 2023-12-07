import { BiArrowBack } from 'react-icons/bi';
import { BackLink } from './Back.styled';

export const Back = ({ to }) => {
  return (
    <>
      <BackLink to={to}>
        <BiArrowBack size="24" />
        Go back
      </BackLink>
    </>
  );
};

