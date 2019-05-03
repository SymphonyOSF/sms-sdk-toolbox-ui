import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/components/text-input/text-input';

storiesOf('Text Input', module)
  .addDecorator(story => <div style={{ width: '30rem' }}>{story()}</div>)
  .add('default', () => (
    <TextInput
      onChange={action('Typing in input')}
      placeholder="Placeholder text..."
    />
  ))
  .add('disabled', () => (
    <TextInput
      disabled
      onChange={action('Typing in input')}
      placeholder="Placeholder text..."
    />
  ));
