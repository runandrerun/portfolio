import React from 'react';
import {Container, Header, BodyWrap, Body, ImageBlock} from './Jumbotron.styles';

export default function Jumbotron({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Jumbotron.Header = function JumbotronHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

Jumbotron.BodyWrap = function JumbotronBodyWrap({ children, ...restProps }) {
  return (
    <BodyWrap {...restProps}>{children}</BodyWrap>
  );
};

Jumbotron.Body = function JumbotronBody({ children, ...restProps }) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};

Jumbotron.ImageBlock = function JumbotronImageBlock({children, ...restProps}) {
  return (
    <ImageBlock>
      <img {...restProps} />
    </ImageBlock>
  )
}
