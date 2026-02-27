const React = require('react');

function Card({ children, title = '', bordered = true, padding = '16px' }) {
  return React.createElement('div', {
    className: `card${bordered ? ' card-bordered' : ''}`,
    style: { padding }
  },
    title ? React.createElement('h3', { className: 'card-title' }, title) : null,
    React.createElement('div', { className: 'card-body' }, children)
  );
}

module.exports = Card;