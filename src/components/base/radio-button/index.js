import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../text';
import {
  RadioContainer, Radio, RadioLabel,
} from './theme';

const RadioButton = (props) => {
  const {
    id, groupName, checked, onChange, children, disabled,
    theme, ...rest
  } = props;

  return (
    <RadioContainer disabled={disabled} theme={theme}>
      <RadioLabel disabled={disabled} htmlFor={id} theme={theme}>
        <Radio
          {...rest}
          disabled={disabled}
          type="radio"
          id={id}
          name={groupName}
          checked={checked}
          onChange={onChange}
          theme={theme}
        />
        <Text size="small">{children}</Text>
      </RadioLabel>
    </RadioContainer>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  checked: false,
  children: undefined,
  onChange: undefined,
  disabled: false,
};

export default withTheme(RadioButton);
