import React from 'react';
import { Container, HeadingsWrap, Title, Subtitle } from './Feature.styles';

export default function Feature({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Feature.HeadingsWrap = function FeatureHeadingsWrap({ children, ...restProps }) {
  return (
    <HeadingsWrap {...restProps}>{children}</HeadingsWrap>
  );
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Feature.Subtitle = function FeatureSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps}>
      {children}
      <span></span>
    </Subtitle>
  );
};
