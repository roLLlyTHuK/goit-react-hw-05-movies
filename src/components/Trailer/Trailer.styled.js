import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  iframe {
    width: 720px;
    aspect-ratio: 16/9;
  }
  p {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    iframe {
      width: 100%;
    }
  }
`;

export default Container;
