import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* margin-top: 20px; */
  background-color: rgba(255, 165, 0, 0.2);
  border: 1px solid orange;
  border-radius: 16px;
  padding: 5px;
  margin: 0 auto;
  width: 250px;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  transition: 0.3s;
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
    max-height: 138px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    background-color: rgba(255, 165, 0, 0.2);
    border: 1px solid orange;
    box-shadow: 0px 5px 5px orange;
    color: orange;
  }
`;
