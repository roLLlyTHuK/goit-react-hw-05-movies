import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  overflow-y: auto;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border: 1px solid orange;
  border-radius: 16px;
  padding: 10px;
  margin: 0 auto;
  width: 300px;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  transition: 0.3s ease-out;
  cursor: default;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 40vw;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 auto;
    width: 92vw;
  }
  img {
    border-radius: 8px;
    max-width: 92px;
    object-fit: cover;
    max-height: 138px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    div > span {
      font-size: 20px;
    }
  }
  span {
    font-size: 24px;
    font-weight: 500;
  }
  p {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
`;
