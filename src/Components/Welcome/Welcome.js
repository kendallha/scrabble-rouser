import React from 'react';
import Letter from '../Letter/Letter';

const Welcome = () => {
  const wordTiles = 'HELLOWORLD'.split('').map(letter => {
    return (
      <Letter tile={letter} value='2' />
      )
    })
  return(
    <section className='welcome'>
      <div>{wordTiles}</div>
      <p>Are you ever in the midst of a tough Scrabble match, and you can't seem to think of any words that take advantage of that triple score spot? Need some new inspiration? Scrabblerouser helps you learn new 7-letter-or-less words to make you a Scrabble champ in no time.</p>
      <button className='start'>Show me a word!</button>
    </section>
  )
}

export default Welcome;