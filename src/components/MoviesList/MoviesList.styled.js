import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 90vw;
  height: 80vh;
  margin: 20px auto;

  li {
    img {
      border: 1px solid orange;
      border-radius: 8px;
      box-shadow: 0px 5px 5px lightgray;

      transition: transform 0.3s ease-out; /* Анимация перехода */

      &:hover {
        box-shadow: 0 0 100px rgba(255, 165, 0, 0.8);

        transform: scale(1.1);

        background-color: rgba(255, 165, 0, 0.2);

        color: orange;
      }
    }
  }
`;

export default List;
