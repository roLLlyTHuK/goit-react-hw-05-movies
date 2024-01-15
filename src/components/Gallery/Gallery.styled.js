import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 95vw;
  margin: 20px auto;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: center;
  /* justify-content: center; */
  padding: 10px;
  width: 90vw;
  height: 420px;
  margin: 20px auto;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  li {
    scroll-snap-align: start;
    img {
      border: 1px solid orange;
      border-radius: 8px;
      box-shadow: 0px 5px 5px lightgray;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
        background-color: rgba(255, 165, 0, 0.2);
        box-shadow: 0px 5px 5px orange;
        color: orange;
      }
    }
  }
`;

const Item = styled.li`
  img {
    transform: scale(0.9);
    border: 1px solid orange;
    border-radius: 8px;
    box-shadow: 0px 5px 5px lightgray;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1);
      transition: 0.3s ease-in-out;
      background-color: rgba(255, 165, 0, 0.2);
      box-shadow: 0px 5px 5px orange;
      color: orange;
    }
  }
`;

export { Container, List, Item };
