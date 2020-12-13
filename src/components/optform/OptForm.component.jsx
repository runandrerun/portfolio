import React from 'react';
import { Container, Wrap, Input, Button, Text, Break } from './OptForm.styles';

export default function OptForm({ children, restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
};
OptForm.Wrap = function OptFormWrap({ children, ...restProps }) {
  return (
    <Wrap {...restProps}>{children}</Wrap>
  );
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return (
    <Input {...restProps} />
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img
        src={require('../../_assets/img/icons/chevron-right.png').default}
        alt="Try now"
      />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return (
    <Text {...restProps}>{children}</Text>
  );
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return (
    <Break {...restProps} />
  );
};
