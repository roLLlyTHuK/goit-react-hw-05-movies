import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  top: 0;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
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
`;
