import React from 'react';
import { letterValues } from '../../utilities/value-calculations';
import './scrabble.css';
import './Letter.css';
import PropTypes from 'prop-types';

const Letter = ({ tile }) => {
  return(
    <article className='scrabble-tile' >
      <div className="scrabble-container">
        <span className="scrabble-tile__letter">{tile}<span className="scrabble-tile__number">{letterValues[tile]}</span></span>
      </div>
    </article>
  )
}

Letter.propTypes = {
  tile: PropTypes.string
}

export default Letter;