import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  top: 0;
`;

export const StyledLink = styled(NavLink)`
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

  &.active {
    background-color: rgba(255, 165, 0, 0.2);
    border: 1px solid orange;
    box-shadow: 0px 5px 5px orange;
    color: orange;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Header = styled.header`
  border-bottom: 1px solid orange;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  padding: 16px 32px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  @media only screen and (max-width: 480px) {
    position: relative;
  }
`;
