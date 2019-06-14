import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import results from '../../../../jest-test-results.json';
import Box from '../Box';
import InputField from '.';
import Text from '../Text';

const styles = {
  width: '24rem',
};

const InputFieldWithErrorStory = () => {
  const [input, setInput] = useState('');
  const inputState = 'error';

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <Box vertical space={20}>
      <Text title size="large">Input Field with error</Text>
      <div style={styles}>

        <InputField
          inputState={inputState}
          value={input}
          onChange={handleInput}
          placeholder="Input here..."
        />

      </div>
      {
        inputState === 'error' && <Text size="tiny">Error message here.</Text>
      }
    </Box>
  );
};

const InputFieldStory = ({ placeholder, disabled }) => {
  const [input, setInput] = useState('');
  const inputState = 'initial';
  const myAction = action('onChange');

  function handleInput(e) {
    myAction(e);
    setInput(e.target.value);
  }

  return (
    <Box vertical space={20}>
      <Text title size="large">Input Field (interactive with knobs)</Text>
      <div style={styles}>
        <InputField
          value={input}
          inputState={inputState}
          onChange={handleInput}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </Box>
  );
};

const InputFieldCopyOptionStory = () => {
  const [input, setInput] = useState('');
  const inputState = 'initial';

  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <Box vertical space={20}>
      <Text title size="large">Input Field with copy option</Text>
      <div style={styles}>

        <InputField
          inputState={inputState}
          value={input}
          onChange={handleInput}
          placeholder="Input here..."
          copyInput
        />
      </div>
    </Box>
  );
};

storiesOf('Base', module)
  .addDecorator(withTests({ results }))
  .addDecorator(withKnobs)
  .add('InputField', () => {
    const placeholder = text('Place Holder', 'Input here...');
    const disabled = boolean('Disabled', false);

    return (
      <Box p={15}>
        <InputFieldStory
          placeholder={placeholder}
          disabled={disabled}
        />
        <InputFieldCopyOptionStory />
        <Box vertical space={20}>
          <Text title size="large">Disabled input field</Text>
          <div style={styles}>
            <InputField disabled />
          </div>
        </Box>
        <InputFieldWithErrorStory />
      </Box>
    );
  },
  {
    jest: ['__tests__/spec.js'],
  });
