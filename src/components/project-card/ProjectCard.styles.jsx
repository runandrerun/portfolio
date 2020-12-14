import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  border: 1px solid #355070;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background-color: white;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  border-radius: .5rem;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 1000px) {
    margin: 1rem 0;
  }
`;


export const Header = styled.h4``;

export const Description = styled.p``;

export const Image = styled.img``;
