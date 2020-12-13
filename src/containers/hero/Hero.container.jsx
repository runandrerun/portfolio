import React from 'react';
import {OptFormContainer} from '../../containers';
import {Hero} from '../../components';

export default function HeroContainer() {
  return (
    <Hero>
      <Hero.HeadlineWrap>
        <Hero.Headline>
          hola! i'm andré
        </Hero.Headline>
        <Hero.Subheadline>
          penpals
        </Hero.Subheadline>
      </Hero.HeadlineWrap>
    </Hero>
  );
};
