const React = require('react');

function Badge({ children, variant = 'default', size = 'sm', rounded = false }) {
  return React.createElement('span', {
    className: `badge badge-${variant} badge-${size}${rounded ? ' badge-rounded' : ''}`
  }, children);
}

module.exports = Badge;