import React from 'react';
import {ProjectCard} from '../../components';
import {ProjectsSection, InnerWrap, CardWrap, Header} from './Projects.styles';

export default function ProjectsContainer() {
  const projects = [
    {
      title: "searchGiphy",
      description: "An application built in React and Styled Components with Hooks and Context"
    },
    {
      title: "rebels market",
      description: "A React app "
    }
  ];
  return (
    <ProjectsSection id="projects">
      <InnerWrap>
        <Header>Projects</Header>
        <CardWrap>
        {
          projects.map(({title, description}) => {
            return (
              <ProjectCard>
                <ProjectCard.Header>{title}</ProjectCard.Header>
                <ProjectCard.Description>{description}</ProjectCard.Description>
              </ProjectCard>
            )
          })
        }
        </CardWrap>
      </InnerWrap>
    </ProjectsSection>
  );
};
