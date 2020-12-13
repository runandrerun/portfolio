import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 150px 45px;

  @media (max-width: 600px) {
    padding: 0 40px;
  }
`;

export const HeadingsWrap = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: white;
  max-width: 700px;
  font-size: 5rem;
  font-weight: 600;
  /* margin: auto; */
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.h2`
  position: relative;
  overflow: hidden;
  font-family: 'Roboto', serif;
  color: white;
  max-width: 700px;
  font-size: 3rem;
  font-weight: 500;
  margin: 1rem auto;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  span {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    width: 100%;
    background: #FFB6B3;
    animation: showHide 10s ease-in-out;

    @keyframes showHide {
     0% {width: 100%; opacity: 1;}
     40% {width: 0%; opacity: 1;}
     60% {width: 0%; opacity: 1;}
     90% {width: 0%; opacity: 0;}
     100% {width: 0%; opacity: 0;}
   }
  }
`;
