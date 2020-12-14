import React from 'react';
import {Container, Header, Description, Image} from './ProjectCard.styles';

export default function ProjectCard({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

ProjectCard.Header = function ProjectHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

ProjectCard.Description = function ProjectDescription({ children, ...restProps }) {
  return (
    <Description {...restProps}>{children}</Description>
  );
};

ProjectCard.Image = function ProjectImage({ children, ...restProps }) {
  return (
    <Image {...restProps }/>
  );
};
