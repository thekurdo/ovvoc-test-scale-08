const React = require('react');

function Badge({ children, variant, size, rounded }) {
  return React.createElement('span', {
    className: `badge badge-${variant} badge-${size}${rounded ? ' badge-rounded' : ''}`
  }, children);
}

Badge.defaultProps = {
  variant: 'default',
  size: 'sm',
  rounded: false
};

module.exports = Badge;
