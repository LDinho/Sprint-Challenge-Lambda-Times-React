import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {

    this.setState({
      tabs: tabData,
      cards: cardData,
    })

  }

  changeSelected = tab => {

    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {
    const { selected, cards } = this.state;

    if (selected === 'all') {
      return cards;
    }

    return cards.filter((card) => {
      return card.tab === this.state.selected;
    })
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs}
              selectedTab={this.state.selected}
              selectTabHandler={this.changeSelected}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
