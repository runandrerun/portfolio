import React from 'react';
import {HeaderContainer, HeroContainer, FeatureContainer, OptFormContainer, JumbotronContainer, ProjectsContainer} from '../../containers';
import {Wave, Feature} from '../../components';
import {Section, InnerWrap} from './Home.styles';

export default function Home() {
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer/>
        <FeatureContainer />
        <Wave />
      </InnerWrap>
      <Wave />
      <JumbotronContainer />
      <ProjectsContainer />
    </Section>
  );
};
