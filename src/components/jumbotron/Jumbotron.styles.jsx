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
  color: #355070;
`;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: left;
  justify-content: space-around;
  padding: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;


export const Body = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 400;
  color: #30303B;
  margin-top: 1rem;
  display: inline-block;
  padding: 0 2.5rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    display: block;
    padding: 1rem;
  }
`;

export const ImageBlock = styled.img`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  max-width: 250px;
  height: auto;
  display: inline-block;

  &:first-of-type {
    border-radius: 100%;
  }

  @media (max-width: 1000px) {
    max-width: 400px;
    display: block;
  }

`;
