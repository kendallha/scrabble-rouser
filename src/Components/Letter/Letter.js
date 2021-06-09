import React from 'react';
import { letterValues } from '../../utilities/value-calculations';

const Letter = ({ tile }) => {
  return(
    <div>
      <article>{tile}</article>
      <article>{letterValues[tile]}</article>
    </div>
  )
}

export default Letter;