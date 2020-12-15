import styled from 'styled-components/macro';

export const ProjectsSection = styled.section`
  margin: 3rem 0;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #355070;
  padding: 2rem;
`;

export const CardWrap = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center !important;
  }
`;

export const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
`;
