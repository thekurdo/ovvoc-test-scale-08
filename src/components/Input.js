const React = require('react');

const Input = function Input({ type = 'text', placeholder = '', value, onChange, disabled = false, ref }) {
  return React.createElement('input', {
    ref,
    type,
    placeholder,
    value,
    onChange,
    disabled,
    className: 'input'
  });
};

module.exports = Input;