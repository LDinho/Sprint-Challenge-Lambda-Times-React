import React from 'react';
import PropTypes from 'prop-types';

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

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
}

export default Tabs;
