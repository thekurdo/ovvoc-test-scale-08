const React = require('react');

function Card({ children, title, bordered, padding }) {
  return React.createElement('div', {
    className: `card${bordered ? ' card-bordered' : ''}`,
    style: { padding }
  },
    title ? React.createElement('h3', { className: 'card-title' }, title) : null,
    React.createElement('div', { className: 'card-body' }, children)
  );
}

Card.defaultProps = {
  bordered: true,
  padding: '16px',
  title: ''
};

module.exports = Card;
