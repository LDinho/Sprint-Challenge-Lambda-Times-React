import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({cards}) => {

  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        return <Card key={index} card={card} />
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}

export default Cards;
