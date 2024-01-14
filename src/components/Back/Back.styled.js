import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const BackLink = styled(Link)`
  border: 2px solid lightgray;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 120px;
  margin-bottom: 16px;
  text-decoration: none;
  border-radius: 5px;
  color: black;
  box-shadow: 0px 5px 5px lightgray;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: rgba(255, 165, 0, 0.2);
    border: 2px solid orange;
    box-shadow: 0px 5px 5px orange;
    color: orange;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
