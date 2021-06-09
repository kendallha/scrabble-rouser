import React, { Component } from 'react';
import { getRandomWord } from '../../utilities/api-calls';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      value: '',
      error: ''
    }
  }

 componentDidMount = async () => {
  try {
    const newWord = await getRandomWord(); 
    const formattedWord = newWord.word.toUpperCase();
    this.setState({ 
      word: formattedWord,
      value: getWordValue(formattedWord)
    })
  } catch (error) {
    console.log(error)
    this.setState({error: "Something went wrong, please try again."})
  }
 }

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