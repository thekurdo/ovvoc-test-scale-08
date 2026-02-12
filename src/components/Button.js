const React = require('react');

function Button({ children, variant, size, disabled, onClick }) {
  return React.createElement('button', {
    className: `btn btn-${variant} btn-${size}`,
    disabled,
    onClick
  }, children);
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false
};

module.exports = Button;
