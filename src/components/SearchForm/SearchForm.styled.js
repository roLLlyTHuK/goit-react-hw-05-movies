import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 10px auto; */
    width: 100%;
    input {
      width: 300px;
      height: 30px;
      border-radius: 5px 0 0 5px;
      border: 1px solid gray;
      border-right: none;
      padding: 5px;
      font-size: 16px;
      background-color: transparent;
      outline: none;
      transition: 0.3s;
      &:focus {
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        transition: 0.3s;
        border: 1px solid orange;
        border-right: none;
        background-color: rgba(255, 165, 0, 0.2);
        color: orange;
      }
    }
    button {
      all: unset;
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: transparent;
      border: 1px solid gray;
      border-left: none;
      border-radius: 0 5px 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      color: black;
      &:hover {
        color: orange;
        transition: 0.3s;
        transform: scale(1.1);
        transform-origin: center;
        border-radius: 5px;
        border: 1px solid orange;
        border-left: none;
        padding: 5px;
        background-color: rgba(255, 165, 0, 0.2);
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        transition: 0.3s;
      }
    }
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

export { Container, ErrorText };
