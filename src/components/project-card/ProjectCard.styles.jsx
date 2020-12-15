import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #355070;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background-color: white;
  padding: 2rem 1rem;
  transition: all 0.5s ease-in-out;
  border-radius: .5rem;
  margin: 1rem 0;
  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 1000px) {
    margin: 1rem 0;
    max-width: 350px;
    width: 100%;
  }
`;


export const Header = styled.h4`
  color: #30303B;
  margin-bottom: .5rem;
`;

export const Description = styled.p`
  color: #30303B;
  margin-bottom: .5rem;
`;

export const Image = styled.img``;


export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  position: absolute;
  bottom: 6px;
  &>:first-child, &>:nth-child(2) {
    margin-right: 1rem;
  }
`;

export const Anchor = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #355070;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 0%;
    content: '';
    height: 3px;
    background: #355070;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
