import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  const { tabs, selectTabHandler, selectedTab } = props;

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, index) => {
          // console.log(tab);
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
