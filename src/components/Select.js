const React = require('react');

const Select = React.forwardRef(function Select({ options, value, onChange, placeholder, disabled }, ref) {
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
});

Select.defaultProps = {
  options: [],
  placeholder: 'Select...',
  disabled: false
};

module.exports = Select;
