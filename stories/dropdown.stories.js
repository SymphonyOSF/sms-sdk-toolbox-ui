import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropdown from '../src/components/dropdown-config/dropdown-config';

const entry = [
  { id: '1', name: 'Hookshot' },
  { id: '2', name: 'Boomerang' },
  { id: '3', name: 'Lamp' },
  { id: '4', name: 'Deku Leaf' },
  { id: '5', name: 'Bombs' },
];

storiesOf('Dropdown', module)
  .addDecorator(story => <div style={{ width: '30rem' }}>{story()}</div>)
  .add('default', () => (
    <Dropdown
      placeholder="Placeholder text..."
      entry={entry}
      identifier="id"
      onChangeOptions={action('Changed options')}
    />
  ))
  .add('disabled', () => (
    <Dropdown
      isDisabled
      placeholder="Placeholder text..."
      entry={entry}
      identifier="id"
      onChangeOptions={action('Changed options')}
    />
  ))
  .add('has value', () => (
    <Dropdown
      option="2"
      placeholder="Placeholder text..."
      entry={entry}
      identifier="id"
      onChangeOptions={action('Changed options')}
    />
  ))
  .add('has value and disabled', () => (
    <Dropdown
      isDisabled
      option="2"
      placeholder="Placeholder text..."
      entry={entry}
      identifier="id"
      onChangeOptions={action('Changed options')}
    />
  ));
