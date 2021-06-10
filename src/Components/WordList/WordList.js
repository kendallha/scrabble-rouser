import React from 'react';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';
import './WordList.css';

const WordList = ({ words }) => {
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
  return(
    <section className='word-list'>{wordList}</section>
  )
}

export default WordList;