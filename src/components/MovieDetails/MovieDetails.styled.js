import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 95vw;
  margin: 0 auto;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    padding: 5px 10px;
    width: fit-content;
    text-align: justify;
    line-height: 1.5;
    transition: 0.3s ease-in-out;
  }
  #parallax-container {
    height: fit-content;
    padding: 0;
    img {
      top: 100px;
      background-color: rgba(255, 165, 0, 0.2);
      border: 1px solid orange;
      border-radius: 16px;
      box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
      transition: transform 0.9s ease-out; /* Анимация перехода */

      &:hover {
        box-shadow: 0 0 100px rgba(255, 165, 0, 0.8);
      }
    }
  }
  .rating {
    width: 160px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 5px;
    font-size: 16px;
    font-weight: 500;
    span {
      font-size: 24px;
      font-weight: 500;
    }
  }
  .info {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 16px;
    margin-bottom: 40px;
    width: fit-content;
  }

  h2 {
    span {
      font-size: 16px;
      font-weight: 500;
      padding: 5px 10px;
      text-transform: uppercase;
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
  gap: 40px;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;

  li a {
    text-decoration: none;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    border-radius: 16px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px #949484;
    padding: 5px 10px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
      background-color: rgba(255, 165, 0, 0.8);
      border: 1px solid orange;
      box-shadow: 0px 5px 5px orange;
      color: white;
    }
    &.active {
      background-color: rgba(255, 165, 0, 0.2);
      border: 1px solid orange;
      box-shadow: 0px 5px 5px orange;
      color: orange;
    }
  }
`;
