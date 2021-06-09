import React from 'react';

const Welcome = () => {
  return(
    <section className='welcome'>
      <Word word='WELCOME' />
      <p>Are you ever in the midst of a tough Scrabble match, and you can't seem to think of any words that take advantage of that triple score spot? Need some new inspiration? Scrabblerouser helps you learn new 7-letter-or-less words to make you a Scrabble champ in no time.</p>
      <button className='start'>Show me a word!</button>
    </section>
  )
}