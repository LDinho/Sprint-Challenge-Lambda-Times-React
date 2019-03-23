import React from 'react';

const Tab = ({tab, selectTabHandler, selectedTab}) => {

  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
