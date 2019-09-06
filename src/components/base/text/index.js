import React from 'react';
import PropTypes from 'prop-types';
import {
  BaseText,
} from './theme';

export default function Text(props) {
  const {
    children, isTitle, size, underline, ...rest
  } = props;

  return (
    <BaseText isTitle={isTitle} size={size} underline={underline} {...rest}>
      {children}
    </BaseText>
  );
}

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'info']),
  isTitle: PropTypes.bool,
  size: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  isTitle: false,
  px: null,
  py: null,
  mx: null,
  my: null,
  size: 'large',
  underline: false,
  type: 'secondary',
};
