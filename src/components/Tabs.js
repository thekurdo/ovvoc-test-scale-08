const React = require('react');

function Tabs({ tabs, activeTab, onTabChange, variant }) {
  return React.createElement('div', { className: `tabs tabs-${variant}` },
    React.createElement('div', { className: 'tabs-list', role: 'tablist' },
      (tabs || []).map(function(tab) {
        return React.createElement('button', {
          key: tab.id,
          role: 'tab',
          className: `tab${activeTab === tab.id ? ' tab-active' : ''}`,
          onClick: function() { onTabChange && onTabChange(tab.id); }
        }, tab.label);
      })
    )
  );
}

Tabs.defaultProps = {
  tabs: [],
  variant: 'default'
};

module.exports = Tabs;
