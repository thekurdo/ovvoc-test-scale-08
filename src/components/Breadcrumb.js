const React = require('react');

const Breadcrumb = /* TODO: forwardRef is no longer needed in React 19 - ref is a regular prop */function Breadcrumb({ items, separator, className }, ref) {
  return React.createElement('nav', {
    ref,
    className: `breadcrumb ${className}`,
    'aria-label': 'Breadcrumb'
  },
    React.createElement('ol', { className: 'breadcrumb-list' },
      (items || []).map(function(item, index) {
        return React.createElement('li', { key: index, className: 'breadcrumb-item' },
          index > 0 ? React.createElement('span', { className: 'breadcrumb-separator' }, separator) : null,
          item.href
            ? React.createElement('a', { href: item.href }, item.label)
            : React.createElement('span', { 'aria-current': 'page' }, item.label)
        );
      })
    )
  );
});

Breadcrumb.defaultProps = {
  items: [],
  separator: '/',
  className: ''
};

module.exports = Breadcrumb;
