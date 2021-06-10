import React from 'react';
import { letterValues } from '../../utilities/value-calculations';
import './scrabble.css';
import './Letter.css';

const Letter = ({ tile }) => {
  return(
    <div class='scrabble-wrapper' >
      <div class="scrabble-container">
        <span class="scrabble-tile__letter">{tile}<span class="scrabble-tile__number">{letterValues[tile]}</span></span>
      </div>
    </div>
  )
}

export default Letter;