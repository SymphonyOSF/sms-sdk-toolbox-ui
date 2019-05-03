import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/button/button';

storiesOf('Button', module)
  .addDecorator(story => <div style={{ width: '30rem' }}>{story()}</div>)
  .add('raised', () => (
    <Button
      type="raised"
      color="primary"
      onClick={action('Button click')}
    >Primary color
    </Button>
  ))
  .add('raised, danger', () => (
    <Button
      type="raised"
      color="danger"
      onClick={action('Button click')}
    >Danger color
    </Button>
  ))
  .add('raised, disabled', () => (
    <Button
      type="raised"
      color="primary"
      onClick={action('Button click')}
      disable
    >Primary color
    </Button>
  ))
  .add('outline', () => (
    <Button
      type="outline"
      color="primary"
      onClick={action('Button click')}
    >Primary color
    </Button>
  ))
  .add('outline, danger', () => (
    <Button
      type="outline"
      color="danger"
      onClick={action('Button click')}
    >Danger color
    </Button>
  ))
  .add('outline, disabled', () => (
    <Button
      type="outline"
      color="primary"
      onClick={action('Button click')}
      disable
    >Primary color
    </Button>
  ))
  .add('text', () => (
    <Button
      type="text"
      color="primary"
      onClick={action('Button click')}
    >Primary color
    </Button>
  ))
  .add('loading', () => (
    <Button
      type="outline"
      color="primary"
      onClick={action('Button click')}
      isLoading
      loadingComponent={<p>Loading...</p>}
    >Primary color
    </Button>
  ))
  .add('fill', () => (
    <Button
      fill
      type="outline"
      color="primary"
      onClick={action('Button click')}
      disable
    >Primary color
    </Button>
  ));
