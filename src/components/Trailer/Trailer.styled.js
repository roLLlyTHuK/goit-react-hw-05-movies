import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  iframe {
    border-radius: 8px;
    width: 640px;
    aspect-ratio: 16/9;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border: 1px solid orange;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }
  p {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    iframe {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Container;
