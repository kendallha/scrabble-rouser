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
      const wordValue = getWordValue(formattedWord);
      if (!this.checkForAcronyms(formattedWord) && wordValue) {
        this.setState({ 
          word: formattedWord,
          value: wordValue
        })
        this.evaluateWordScore();
      } else {
        console.log("NO WAY");
        console.log(formattedWord);
        this.getNewWord();
      }
    } catch (error) {
      console.log(error)
      this.setState({error: "Something went wrong, please try again."})
    }
  }

  checkForAcronyms = (word) => {
    if (word.split('').includes('A') || word.split('').includes('E') || word.split('').includes('I') || word.split('').includes('O') || word.split('').includes('U') || word.split('').includes('Y')) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount = async () => {
    this.getNewWord();
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
    // } else if (!this.state.value) {
    //     return(
    //       <div className='issue-wrapper'>
    //         <h3 className='issue'>Oh no, we had a problem scoring this word. Let's try that again.</h3>
    //         <button className='word-button' onClick={() => this.getNewWord()}>Another word</button>
    //       </div>

    //     )
    } else {
      const wordTiles = this.state.word.split('').map(letter => {
        return (
          <Letter tile={letter} />
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