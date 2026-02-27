const React = require('react');

function Accordion({ items = [], allowMultiple = false, className = '' }) {
  return React.createElement('div', {
    className: `accordion ${className}`,
    'data-allow-multiple': allowMultiple
  },
    (items || []).map(function(item, index) {
      return React.createElement('div', { key: index, className: 'accordion-item' },
        React.createElement('button', { className: 'accordion-header' }, item.title),
        React.createElement('div', { className: 'accordion-body' }, item.content)
      );
    })
  );
}

module.exports = Accordion;