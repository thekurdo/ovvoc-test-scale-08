const React = require('react');

const Select = function Select({ options = [], value, onChange, placeholder = 'Select...', disabled = false, ref }) {
  return React.createElement('select', {
    ref,
    value,
    onChange,
    disabled,
    className: 'select'
  },
    placeholder ? React.createElement('option', { value: '' }, placeholder) : null,
    (options || []).map(function(opt) {
      return React.createElement('option', { key: opt.value, value: opt.value }, opt.label);
    })
  );
};

module.exports = Select;