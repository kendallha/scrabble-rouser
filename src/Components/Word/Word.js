import React, { Component } from 'react';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      word: 'WELCOME',
      error: ''
    }
  }

  render () {
    const wordTiles = word.split('').map(letter => {
      return (
        <Letter tile={letter} />
      )
    });
}
}

export default Word;