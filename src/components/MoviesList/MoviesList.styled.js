import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 90vw;
  margin: 20px auto;

  li {
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

export default List;
