const React = require('react');

function Alert({ children, type, dismissible, onDismiss }) {
  return React.createElement('div', {
    className: `alert alert-${type}`,
    role: 'alert'
  },
    React.createElement('div', { className: 'alert-content' }, children),
    dismissible ? React.createElement('button', {
      className: 'alert-dismiss',
      onClick: onDismiss
    }, '\u00d7') : null
  );
}

Alert.defaultProps = {
  type: 'info',
  dismissible: false
};

module.exports = Alert;
