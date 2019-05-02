import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from '../src/components/checkbox/checkbox';

storiesOf('Checkbox', module)
  .add('unchecked', () => (
    <Checkbox
      onChange={action('Checkbox click')}
    >
    Checkbox label
    </Checkbox>
  ))
  .add('unchecked and disabled', () => (
    <Checkbox
      disabled
      onChange={action('Checkbox click')}
    >
    Checkbox label
    </Checkbox>
  ))
  .add('checked', () => (
    <Checkbox
      isChecked
      onChange={action('Checkbox click')}
    >
      Checkbox label
    </Checkbox>
  ))
  .add('checked and disabled', () => (
    <Checkbox
      isChecked
      disabled
      onChange={action('Checkbox click')}
    >
      Checkbox label
    </Checkbox>
  ));
