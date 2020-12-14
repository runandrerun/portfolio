import React from 'react';
import {Container, Header, Description, Image, Anchor, ButtonsContainer} from './ProjectCard.styles';

export default function ProjectCard({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

ProjectCard.Header = function ProjectCardHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

ProjectCard.Description = function ProjectCardDescription({ children, ...restProps }) {
  return (
    <Description {...restProps}>{children}</Description>
  );
};

ProjectCard.Image = function ProjectCardImage({ children, ...restProps }) {
  return (
    <Image {...restProps }/>
  );
};

ProjectCard.ButtonsContainer = function ProjectCardButtonsContainer({ children, ...restProps }) {
  return (
    <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
  );
};

ProjectCard.Anchor = function ProjectCardAnchor({ children, ...restProps }) {
  return (
    <Anchor {...restProps}>{children}</Anchor>
  );
};
