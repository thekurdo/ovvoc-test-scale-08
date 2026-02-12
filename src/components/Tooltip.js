const React = require('react');

const Tooltip = React.forwardRef(function Tooltip({ children, text, position }, ref) {
  return React.createElement('div', {
    ref,
    className: `tooltip tooltip-${position}`,
    'data-tooltip': text
  }, children);
});

Tooltip.defaultProps = {
  text: '',
  position: 'top'
};

module.exports = Tooltip;
