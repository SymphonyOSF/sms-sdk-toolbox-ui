import React from 'react';

import { storiesOf } from '@storybook/react';
import CopyTextInput from '../src/components/copy-text-input/copy-text-input';

storiesOf('Copy Text Input', module)
  .addDecorator(story => <div style={{ width: '30rem' }}>{story()}</div>)
  .add('raised', () => (
    <CopyTextInput>Copying value</CopyTextInput>
  ));
