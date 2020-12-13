import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  margin-top: 10px;
  height: 80px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  /* filter: brightness(0) invert(1); */
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  transform: translateX(0px);
  transition: all 0.5s ease-in;
  display: inline-block;
  color: white;

  &:hover {
    animation: wiggle 1s infinite ease-in-out;
  }
  @keyframes wiggle {
    0% { transform: translateX(0px); }
    30% { transform: translateX(-1px); }
    60% { transform: translateX(1px); }
    100% { transform: translateX(0px); }
  }
  @media (max-width: 1000px) {
    width: 45px;
    height: 45px;
  }
`;

export const LogoWrap = styled(ReactRouterLink)`
  display: flex;
  vertical-align: center;
  text-decoration: none;
`;

export const LogoText = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  vertical-align: center;
  margin: auto;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &>:first-child, &>:nth-child(2) {
    margin-right: 1rem;
  }
`;

export const Anchor = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 0%;
    content: '';
    height: 3px;
    background: #ffffff;
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
    display: none !important;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 0%;
  	content: '';
  	height: 3px;
    background: #ffffff;
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
    display: none !important;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  background-image: require('../../_assets/img/waves-menu.svg');
  @media (max-width: 1000px) {
    display: block !important;
  }
`;
