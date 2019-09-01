import React from 'react';
import PropTypes from 'prop-types';
import {
  BaseText,
} from './theme';

export default function Text(props) {
  const {
    children, title, size, underline, htmlTitle, ...rest
  } = props;

  return (
    <BaseText isTitle={title} title={htmlTitle} size={size} underline={underline} {...rest}>
      {children}
    </BaseText>
  );
}

Text.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'info']),
  title: PropTypes.bool,
  size: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  title: false,
  px: null,
  py: null,
  mx: null,
  my: null,
  size: 'large',
  underline: false,
  type: 'secondary',
};