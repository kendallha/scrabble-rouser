import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Word from '../Word/Word';
import WordList from '../WordList/WordList';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state= {
      savedWords: [],
      topScorers: []
    }
  }

  componentDidMount = () => {
    this.getFromStorage();
  }

  saveWord = (word, type) => {
    if (!this.state[type].includes(word)) {
      this.setState({[type]: [...this.state[type], word]}) 
    }
  }

  saveToStorage = (list) => {
    localStorage.setItem(list, JSON.stringify(this.state[list]));
    // localStorage.setItem('topScorers', JSON.stringify(this.state.topScorers));
  }

  getFromStorage = () => {
    const savedWordsString = localStorage.getItem('savedWords');
    console.log(savedWordsString);
    const topWordsList = JSON.parse(localStorage.getItem('topScorers'));
    this.setState({
      savedWords: JSON.parse(savedWordsString),
      topScorers: topWordsList
    })
  }

  removeFromSaved = (word, type) => {
    const newList = this.state[type];
    newList.splice(this.state[type].indexOf(word),1);
    this.setState({[type]: newList})
  }

  render() { 
    if (this.state.savedWords.length) {
      this.saveToStorage('savedWords');
    }
    if (this.state.topScorers.length) {
      this.saveToStorage('topScorers');
    }
    return (
        <main className='main'>
          <Header />
          <Switch>
            <Route exact path='/learn' render={() => {
              return (
              <Word saveWord={this.saveWord}/>
              )
            }} />
            <Route path='/saved' render={() => {
              return (
              <WordList words={this.state.savedWords} message="You haven't saved any words yet." removeWord={this.removeFromSaved} type='savedWords' />
              )
            }} />
            <Route path='/topscorers' render={() => {
              return (
              <WordList words={this.state.topScorers} message="You haven't encountered any top-scoring words yet. Let's go find some!" removeWord={this.removeFromSaved} type='topScorers' />
              )
            }} />
            <Route exact path='/' render={() => {
              return (
                <Welcome />
              )
            }} />
            <Route>
              <Error error={`404 - Page not found. Click 'Scrabble-rouser' above to return to the main page.`} />
            </Route>
          </Switch>
        </main>
      );
    }
}

export default App;
