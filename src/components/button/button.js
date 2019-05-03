import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const executePress = (e) => {
    const { onClick } = props;
    e.stopPropagation();
    onClick();
  };

  const {
    type, color, disable, isLoading, loadingComponent, children, onClick, typeButton,
    className, fill,
  } = props;

  return (
    <button
      type={!typeButton ? 'button' : typeButton}
      onClick={onClick ? executePress : null}
      className={
          `${disable
            ? `${className || ''} btn btn-${type}--disable`
            : `${className || ''} btn btn-${type}--${color}`
          } ${fill ? 'btn--fill' : ''}`
          }
      disabled={disable || isLoading}
    >
      <div className="button-content">
        <span className={isLoading ? 'button-text--hide' : ''}>{children}</span>
        {isLoading ? <div className="button-loading">{loadingComponent}</div> : null}
      </div>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disable: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  onClick: PropTypes.func,
  typeButton: PropTypes.string,
  fill: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  disable: false,
  isLoading: false,
  loadingComponent: null,
  onClick: null,
  className: undefined,
  typeButton: null,
  fill: false,
};
