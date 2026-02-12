const React = require('react');

const Input = React.forwardRef(function Input({ type, placeholder, value, onChange, disabled }, ref) {
  return React.createElement('input', {
    ref,
    type,
    placeholder,
    value,
    onChange,
    disabled,
    className: 'input'
  });
});

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false
};

module.exports = Input;
