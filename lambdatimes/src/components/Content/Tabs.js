import React from 'react';
import Tab from './Tab';

const Tabs = ({tabs, selectTabHandler, selectedTab}) => {

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, index) => {
          return (
            <Tab key={index}
                 tab={tab}
                 selectTabHandler={selectTabHandler}
                 selectedTab={selectedTab}
            />
          )

        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

export default Tabs;
