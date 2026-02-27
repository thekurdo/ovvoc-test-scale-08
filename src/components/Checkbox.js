const React = require('react');

function Checkbox({ label, checked, onChange, disabled }) {
  return React.createElement('label', { className: 'checkbox-wrapper' },
    React.createElement('input', {
      type: 'checkbox',
      checked,
      onChange,
      disabled,
      className: 'checkbox'
    }),
    React.createElement('span', { className: 'checkbox-label' }, label)
  );
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: ''
};

module.exports = Checkbox;
