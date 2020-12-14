import React from 'react';
import {ProjectCard} from '../../components';
import {ProjectsSection, InnerWrap, CardWrap, Header} from './Projects.styles';

export default function ProjectsContainer() {
  const projects = [
    {
      title: "searchGiphy",
      description: "An application built in React and Styled Components with Hooks and Context – search Giphy for gifs at a glance.",
      link: 'https://runandrerun.github.io/marvel-challenge/',
      github: 'https://github.com/runandrerun/marvel-challenge'
    },
    {
      title: "Rebels Market",
      description: "Inspired by Misfits Market, this single page application utilizes an API to display items to purchase and also makes a mock post request. Redux is used for state management.",
      link: 'https://runandrerun.github.io/rebels/',
      github: 'https://github.com/runandrerun/rebels'
    },
    {
      title: "Pokedex",
      description: "Ever longed for a quick reference guide for your favorite Pokemon? Where here it is! Built entirely React, and utilizing an API, search real time for any Pokemon and view their stats. Redux is used for state management.",
      link: 'https://wizardly-mcclintock-b21327.netlify.app/',
      github: 'https://github.com/runandrerun/react-pokedex'
    },
    {
      title: "Small Human",
      description: "Are you a plant enthusiast? Perfect! Explore all these plants that Small Human offers! This app is built in React, has a ton of custom animations, and also uses React Router DOM. Redux is utilized for state management.",
      link: 'https://runandrerun.github.io/small-human',
      github: 'https://github.com/runandrerun/small-human'
    },
    {
      title: 'Tetrominoes',
      description: "Love retro video games? Here's Tetris! Built completely with custom HTML, CSS, JavaScript and Canvas!",
      link: 'https://tetrominoes.herokuapp.com/',
      github: 'https://github.com/runandrerun/tetris'
    },
    {
      title: 'OG Pong',
      description: 'If you loved Tetrominoes, you may love OG Pong too! This is also built in custom HTML, CSS, and JavaScript',
      link: 'https://pong-og.herokuapp.com/',
      github: 'https://github.com/runandrerun/pong'
    }
  ];
  return (
    <ProjectsSection id="projects">
      <InnerWrap>
        <Header>Projects</Header>
        <CardWrap>
        {
          projects.map(({title, description, link, github}) => {
            return (
              <ProjectCard>
                <ProjectCard.Header>{title}</ProjectCard.Header>
                <ProjectCard.Description>{description}</ProjectCard.Description>
                <ProjectCard.ButtonsContainer>
                  <ProjectCard.Anchor href={link} rel="noopener noreferrer" target="_blank">Demo</ProjectCard.Anchor>
                  <ProjectCard.Anchor href={github} rel="noopener noreferrer" target="_blank">Github</ProjectCard.Anchor>
                </ProjectCard.ButtonsContainer>
              </ProjectCard>
            )
          })
        }
        </CardWrap>
      </InnerWrap>
    </ProjectsSection>
  );
};
