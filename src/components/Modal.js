const React = require('react');

function Modal({ children, isOpen, onClose, title, size }) {
  if (!isOpen) return null;
  return React.createElement('div', { className: 'modal-overlay', onClick: onClose },
    React.createElement('div', {
      className: `modal modal-${size}`,
      onClick: function(e) { e.stopPropagation(); }
    },
      React.createElement('div', { className: 'modal-header' },
        React.createElement('h2', null, title),
        React.createElement('button', { onClick: onClose, className: 'modal-close' }, '\u00d7')
      ),
      React.createElement('div', { className: 'modal-body' }, children)
    )
  );
}

Modal.defaultProps = {
  isOpen: false,
  title: '',
  size: 'md'
};

module.exports = Modal;
