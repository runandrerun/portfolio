import React from 'react';
import {ImageBlock} from './Wave.styles';
import svg from '../../_assets/img/skirt.svg';

export default function Wave() {
  return (
    <ImageBlock>
      <img src={svg} alt={"Wave"} />
    </ImageBlock>
  );
};
