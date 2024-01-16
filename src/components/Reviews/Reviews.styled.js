const { default: styled } = require('styled-components');
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  overflow-y: auto;
  margin: 0 auto;
  p {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px) {
    height: fit-content;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 20px;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: black;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    border: 1px solid orange;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
    padding: 10px 10px;
    transition: 0.3s;
    width: 95%;
    span {
      font-weight: 500;
      font-size: 20px;
    }
    div {
      padding: 5px;
      margin: 0;
      text-align: justify;
      line-height: 1.5;
    }
  }
`;

export default List;
