import React from 'react';
import { letterValues } from '../../utilities/value-calculations';
import './scrabble.css'

const Letter = ({ tile }) => {
  return(
    <div class="scrabble-container">
      <span class="scrabble-tile__letter">{tile}<span class="scrabble-tile__number">{letterValues[tile]}</span></span>
    </div>
  )
}

export default Letter;