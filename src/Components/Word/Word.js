import React, { Component } from 'react';
import Letter from '../Letter/Letter';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      word: 'WELCOME',
      value: '14 points',
      error: ''
    }
  }

  // getLetterValue = (letter) => {
  //   switch (letter) {
  //     case 'a':
  //       value = 
  //   }
  // }


  render () {
    const wordTiles = this.state.word.split('').map(letter => {
      return (
        <Letter tile={letter} value='2' />
      )
    });
    return(
      <section className='new-word'>
        <article className="word-display">{wordTiles}</article>
        <h3>{this.state.value}</h3>
        <button>Another word</button>
        <button>Save</button>
      </section>
    )
  }
}

export default Word;