import React from 'react';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';
import './WordList.css';

const WordList = ({ words, heading }) => {
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
    <section className='list'>
      <h3>{heading}</h3>
      <article className='word-list'>{wordList}</article>
    </section>
  )
}

export default WordList;