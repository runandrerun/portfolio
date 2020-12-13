import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
`;

export const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: #4F7C8C;
`;

export const BodyWrap = styled.div`
  margin: 0 auto;
  text-align: left;
  max-width: 640px;
`;

export const Body = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 400;
  color: #30303B;
`;

export const ImageBlock = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;

  img {
    max-width: 800px;
    height: auto;

    @media (max-width: 1000px) {
      max-width: 400px;
    }
  }
`;
