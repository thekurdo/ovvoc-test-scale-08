const React = require('react');

function Spinner({ size, color, className }) {
  return React.createElement('div', {
    className: `spinner spinner-${size} ${className}`,
    style: { borderColor: color },
    role: 'status',
    'aria-label': 'Loading'
  },
    React.createElement('span', { className: 'sr-only' }, 'Loading...')
  );
}

Spinner.defaultProps = {
  size: 'md',
  color: '#3b82f6',
  className: ''
};

module.exports = Spinner;
