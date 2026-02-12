const React = require('react');

function Avatar({ src, alt, size, rounded }) {
  return React.createElement('img', {
    src,
    alt,
    className: `avatar avatar-${size}${rounded ? ' avatar-rounded' : ''}`,
    width: size === 'sm' ? 32 : size === 'lg' ? 64 : 48,
    height: size === 'sm' ? 32 : size === 'lg' ? 64 : 48
  });
}

Avatar.defaultProps = {
  alt: '',
  size: 'md',
  rounded: true
};

module.exports = Avatar;
