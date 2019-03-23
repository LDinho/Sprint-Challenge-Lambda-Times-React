import React from 'react';
import Card from './Card';

const Cards = ({cards}) => {

  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        // console.log(card);
        return <Card key={index} card={card} />
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
