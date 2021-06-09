import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Word from '../Word/Word';
import SavedWords from '../SavedWords/SavedWords';
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
    // const updatedSaves = this.state.savedWords;
    // updatedSaves.push(word);
    this.setState({savedWords: [...this.state.savedWords, word]}) 
  }

  render() {  
  return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/learn' render={() => {
            return (
            <Word saveWord={this.saveWord} />
            )
          }} />
          <Route path='/saved' render={() => {
            return (
            <SavedWords words={this.state.savedWords} heading='Saved Words' />
            )
          }} />
          <Route path='/topscorers' render={() => {
            return (
            <SavedWords words={this.state.topScorers} heading='Top Scoring Words' />
            )
          }} />
          <Route exact path='/' render={() => {
            return (
              <Welcome />
            )
          }} />

        </Switch>
      </main>
    );
  }
}

export default App;
