import React from 'react';
import { Link } from 'react-router-dom';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';
import './WordList.css';
import PropTypes from 'prop-types';

const WordList = ({ words, message, removeWord, type }) => {

  const wordList = words.map(word => {
    const letters = word.split('').map(letter => {
      return (
        <Letter tile={letter} key={Math.random()}/>
        )
      })
    return (
      <div className='word-item' key={Math.random()}>
        <article className='word' key={Math.random()}>{letters}</article>
        <p className='score'>{getWordValue(word)} points</p>
        <i className="fas fa-times fa-2x" onClick={() => removeWord(word, type)}role='button'></i>
      </div>
    )
  });
  if (!words.length) {
    return(
      <div className='empty-wrapper' >
        <h3 className='empty-message'>{message}</h3>
        <Link to='/learn'>
          <button className='start'>Show me a word</button>
        </Link>
      </div>
    )
  } else {
    return(
      <section className='word-list'>{wordList}</section>
    )
  }
}

WordList.propTypes = {
  words: PropTypes.array,
  message: PropTypes.string,
  removeWord: PropTypes.func,
  type: PropTypes.string
}

export default WordList;