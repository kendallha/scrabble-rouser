import React from 'react';
import { getWordValue } from '../../utilities/value-calculations';


const WordList = ({ words, heading }) => {
  const wordList = words.map(word => {
    return (
      <li>{word}: {getWordValue(word)}</li>
    )
  });
  return(
    <section>
      <h3>{heading}</h3>
      <ul>{wordList}</ul>
    </section>
  )
}

export default WordList;