import React from 'react';
import {
  render,
} from '@testing-library/react';
import Button from '../index';

let componentRef = null;

it('Mounts', () => {
  const { getByTitle } = render(
    <Button onClick={() => {}} title="sample">
      <span>Sample</span>
    </Button>,
  );

  componentRef = getByTitle(/sample/i, { selector: 'button' });
  expect(componentRef).toBeTruthy();
});
