const React = require('react');

function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }) {
  return React.createElement('button', {
    className: `btn btn-${variant} btn-${size}`,
    disabled,
    onClick
  }, children);
}

module.exports = Button;