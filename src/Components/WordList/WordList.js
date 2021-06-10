import React from 'react';
import { Link } from 'react-router-dom';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';
import './WordList.css';

const WordList = ({ words, message }) => {
  const wordList = words.map(word => {
    const letters = word.split('').map(letter => {
      return (
        <Letter tile={letter} id={Date.now()}/>
        )
      })
    return (
      <div className='word-item'>
        <article className='word'>{letters}</article> 
        <p className='score'>{getWordValue(word)} points</p>
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

export default WordList;