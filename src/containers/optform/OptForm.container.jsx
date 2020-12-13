import React from 'react';
import { OptForm } from '../../components';

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Wrap>
      <OptForm.Input placeholder="E-mail address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
      </OptForm.Wrap>
    </OptForm>
  );
};
