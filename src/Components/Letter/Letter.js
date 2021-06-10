import React from 'react';
import { letterValues } from '../../utilities/value-calculations';
import './scrabble.css';
import './Letter.css';

const Letter = ({ tile }) => {
  return(
    <div className='scrabble-wrapper' >
      <div className="scrabble-container">
        <span className="scrabble-tile__letter">{tile}<span className="scrabble-tile__number">{letterValues[tile]}</span></span>
      </div>
    </div>
  )
}

export default Letter;