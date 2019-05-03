import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from '../src/components/radio/radio-button';

storiesOf('Radio Button', module)
  .add('unchecked', () => (
    <Radio
      onChange={action('Radio click')}
      groupName="group"
      id="id"
    >
    Radio label
    </Radio>
  ))
  .add('unchecked and disabled', () => (
    <Radio
      disabled
      onChange={action('Radio click')}
      groupName="group"
      id="id"
    >
    Radio label
    </Radio>
  ))
  .add('checked', () => (
    <Radio
      checked
      onChange={action('Radio click')}
      groupName="group"
      id="id"
    >
      Radio label
    </Radio>
  ))
  .add('checked and disabled', () => (
    <Radio
      checked
      disabled
      onChange={action('Radio click')}
      groupName="group"
      id="id"
    >
      Radio label
    </Radio>
  ));
