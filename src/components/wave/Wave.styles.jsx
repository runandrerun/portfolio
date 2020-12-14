import styled from 'styled-components/macro';

export const ImageBlock = styled.div`
  height: 24vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: 12vh;
  }
  img {
    position: absolute;
    bottom: -20px;
    width: 100%;
    transform: translateX(0);

    @media (max-width: 1000px) {
      bottom: 0;
    }
  }
`;
