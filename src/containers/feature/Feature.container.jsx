import React from 'react';
import {Feature} from '../../components';

export default function FeatureContainer({children}) {
  return (
    <Feature>
      <Feature.HeadingsWrap>
      <Feature.Title>hola! i'm andré</Feature.Title>
      <Feature.Subtitle>developer, marathoner, powerlifter</Feature.Subtitle>
      </Feature.HeadingsWrap>
      {children}
    </Feature>
  );
};
