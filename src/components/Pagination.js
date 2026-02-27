const React = require('react');

function Pagination({ currentPage = 1, totalPages = 1, onPageChange, size = 'md' }) {
  var pages = [];
  for (var i = 1; i <= totalPages; i++) { pages.push(i); }
  return React.createElement('nav', { className: `pagination pagination-${size}`, 'aria-label': 'Pagination' },
    React.createElement('button', {
      className: 'pagination-prev',
      disabled: currentPage <= 1,
      onClick: function() { onPageChange && onPageChange(currentPage - 1); }
    }, 'Prev'),
    pages.map(function(p) {
      return React.createElement('button', {
        key: p,
        className: `pagination-page${p === currentPage ? ' active' : ''}`,
        onClick: function() { onPageChange && onPageChange(p); }
      }, p);
    }),
    React.createElement('button', {
      className: 'pagination-next',
      disabled: currentPage >= totalPages,
      onClick: function() { onPageChange && onPageChange(currentPage + 1); }
    }, 'Next')
  );
}

module.exports = Pagination;