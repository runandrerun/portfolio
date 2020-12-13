import React from 'react';
import {Jumbotron} from '../../components';
import world from '../../_assets/img/world.svg';

export default function JumbotronContainer() {
  return (
    <Jumbotron>
      <Jumbotron.Header>Connect with others from around the world</Jumbotron.Header>
      <Jumbotron.ImageBlock src={world} alt="World map"/>
      <Jumbotron.BodyWrap>
        <Jumbotron.Body>Bottl makes it seamless to find and connect with other like minded people from around the world.</Jumbotron.Body>
      </Jumbotron.BodyWrap>
    </Jumbotron>
  );
};
