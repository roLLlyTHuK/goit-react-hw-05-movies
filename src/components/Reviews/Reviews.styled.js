const { default: styled } = require('styled-components');

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: black;
    background-color: rgba(255, 165, 0, 0.2);
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0px 5px 5px lightgray;
    padding: 10px 10px;
    transition: 0.3s;
    width: 600px;
    span {
      font-weight: 500;
      font-size: 20px;
    }
    div {
      padding: 5px;
      margin: 0;
      text-align: justify;
      word-wrap: break-word;
    }
  }
`;

export default List;
