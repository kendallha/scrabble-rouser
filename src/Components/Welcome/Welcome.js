import React from 'react';
import { Link } from 'react-router-dom';
import Letter from '../Letter/Letter';
import './Welcome.css';

const Welcome = () => {
  const wordTiles = 'HELLO_WORLD'.split('').map(letter => {
    return (
      <Letter tile={letter} key={Math.random()}/>
      )
    })
  return(
    <section className='welcome'>
      <article className='word-tiles'>{wordTiles}</article>
      <div className='welcome-section'>
        <p className='intro'>Are you ever in the midst of a tough Scrabble match, and you can't seem to think of any words that take advantage of that triple score spot? Need some new inspiration? Scrabble-rouser helps you learn new 7-letter-or-less words to make you a Scrabble champ in no time. Save words you want to remember, and view top-scorers to see all the words you've learned worth 10 points or more. Let's get started!</p>
        <Link to='/learn'>
          <button className='start'>Show me a word</button>
        </Link>
      </div>
    </section>
  )
}

export default Welcome;