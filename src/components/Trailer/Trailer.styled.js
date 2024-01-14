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

  @media only screen and (max-width: 768px) {
    iframe {
      width: 100%;
    }
  }
`;

export default Container;
