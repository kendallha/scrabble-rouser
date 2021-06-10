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

  saveWord = (word) => {
    if (!this.state.savedWords.includes(word)) {
      this.setState({savedWords: [...this.state.savedWords, word]}) 
    }
  }

  addWordToTopScorers = (word) => {
    this.setState({topScorers: [...this.state.topScorers, word]})
  }

  render() {  
  return (
      <main className='main'>
        <Header />
        <Switch>
          <Route exact path='/learn' render={() => {
            return (
            <Word saveWord={this.saveWord} addWord={this.addWordToTopScorers} />
            )
          }} />
          <Route path='/saved' render={() => {
            return (
            <WordList words={this.state.savedWords} message="You haven't saved any words yet." />
            )
          }} />
          <Route path='/topscorers' render={() => {
            return (
            <WordList words={this.state.topScorers} message="You haven't encountered any top-scoring words yet. Let's go find some!" />
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
