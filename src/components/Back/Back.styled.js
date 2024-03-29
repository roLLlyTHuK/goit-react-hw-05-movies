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
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0px 5px 5px #949484;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: rgba(255, 165, 0, 0.8);
    border: 2px solid orange;
    box-shadow: 0px 5px 5px orange;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`;
