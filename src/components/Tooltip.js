const React = require('react');

const Tooltip = function Tooltip({ children, text = '', position = 'top', ref }) {
  return React.createElement('div', {
    ref,
    className: `tooltip tooltip-${position}`,
    'data-tooltip': text
  }, children);
};

module.exports = Tooltip;