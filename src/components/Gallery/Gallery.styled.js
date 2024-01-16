import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 96vw;
  margin: 20px auto;
  border: 1px solid orange;
  border-radius: 8px;
  padding: 0 20px;
`;

const Item = styled.li`
  img {
    width: 320px;
    transform: scale(0.9);
    border: 1px solid orange;
    border-radius: 8px;
    box-shadow: 0px 5px 5px lightgray;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1);
      transition: 0.3s ease-in-out;
      background-color: rgba(255, 165, 0, 0.2);
      box-shadow: 0 0 100px rgba(255, 165, 0, 0.8);
      color: orange;
    }
    @media only screen and (max-width: 768px) {
      width: 250px;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;

export { Container, Item };
