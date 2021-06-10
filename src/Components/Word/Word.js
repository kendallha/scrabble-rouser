import React, { Component } from 'react';
import { getRandomWord } from '../../utilities/api-calls';
import { getWordValue } from '../../utilities/value-calculations';
import Letter from '../Letter/Letter';
import Error from '../Error/Error';
import './Word.css';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      value: '',
      error: ''
    }
  }

  getNewWord = async () => {
    try {
      const newWord = await getRandomWord(); 
      const formattedWord = newWord.word.toUpperCase();
      if (!this.checkForAcronyms(formattedWord) && getWordValue(formattedWord)) {
        this.setState({ 
          word: formattedWord,
          value: getWordValue(formattedWord)
        })
        this.evaluateWordScore();
      } else {
        this.getNewWord();
      }
    } catch (error) {
      if (error.message === '429') {
        this.setState({error: "Whoa there, champ! We're having trouble keeping up. Give us a moment to catch up and then try again."})
      } else {
          this.setState({error: "Something went wrong, please try again."})
      }
    }
  }

  componentDidMount = async () => {
    this.getNewWord();
  }

  checkForAcronyms = (word) => {
    if (word.split('').includes('A') || word.split('').includes('E') || word.split('').includes('I') || word.split('').includes('O') || word.split('').includes('U') || word.split('').includes('Y')) {
      return false;
    } else {
      return true;
    }
  }

  evaluateWordScore = () => {
    if (this.state.value >= 10) {
      this.props.addWord(this.state.word);
    }
  }

  render () {
    if (!this.state.error && !this.state.word) {
      return (
        <h3 className='loading'>Looking for a great new word...</h3>
      )
    } else if (this.state.error) {
        return(
          <Error error={this.state.error} />
        )
    } else {
      const wordTiles = this.state.word.split('').map(letter => {
        return (
          <Letter tile={letter} id={Date.now()}/>
        )
      });
      return(
        <section className='new-word'>
          <article className="word-display">{wordTiles}</article>
          <h3 className='points'>{this.state.value} points</h3>
          <div className='buttons'>
            <button className='word-button' onClick={() => this.getNewWord()}>Another word</button>
            <button className='word-button' onClick={() => this.props.saveWord(this.state.word)}>Save
            </button>
          </div>
        </section>
      )
    }
  }
}

export default Word;