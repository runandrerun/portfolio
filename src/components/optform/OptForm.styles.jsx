import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.form`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  /* flex-grow: 1; */
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: .6rem;
  height: 50px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none !important;
    border: 1px solid #4F7C8C;
    box-shadow: 0 0 10px #4F7C8C;
  }
  @media (max-width: 1000px) {
    width: 80%;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #4F7C8C;
  color: white;
  text-transform: uppercase;
  border: 0;
  padding: 0 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #7B9EAB;
  }

  img {
    margin-left: .8rem;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 1rem;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  margin: 1rem auto;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
