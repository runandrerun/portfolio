import React from 'react';
import {Container, HeadlineWrap, Headline, Subheadline} from './Hero.styles';

export default function Hero({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Hero.HeadlineWrap = function HeroHeadlineWrap({ children, ...restProps }) {
  return (
    <HeadlineWrap {...restProps}>{children}</HeadlineWrap>
  );
};

Hero.Headline = function HeroHeadline({ children, ...restProps }) {
  return (
    <Headline {...restProps}>{children}</Headline>
  );
};

Hero.Subheadline = function HeroSubheadline({ children, ...restProps }) {
  return (
    <Subheadline {...restProps}>{children}</Subheadline>
  );
};
