import { styled } from 'styled-components';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 20px;
  width: 95vw;
  margin: 0 auto;
  position: relative;
  h1 {
    margin: 0;
    padding: 0;
  }
  img {
    position: sticky;
    top: 100px;
  }
  .rating {
    width: 160px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: rgba(255, 165, 0, 0.2);
    border: 1px solid orange;
    border-radius: 16px;
    padding: 2px 5px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
    transition: 0.3s;
    font-size: 16px;
    font-weight: 500;
    span {
      color: orange;
      font-size: 24px;
      font-weight: 300;
    }
  }
  h2 {
    span {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      position: static;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;

  li a {
    text-decoration: none;
    color: black;
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px lightgray;
    padding: 5px 10px;

    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
      background-color: rgba(255, 165, 0, 0.2);
      border: 1px solid orange;
      box-shadow: 0px 5px 5px orange;
      color: orange;
    }
  }
`;
