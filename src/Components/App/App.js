
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Word from '../Word/Word';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state= {
      savedWords: [],
      topScorers: []
    }
  }

  render() {  
  return (
      <main>
        <Header />
        <Switch>
          <Route path='/learn' render={() => {
            <Word />
          }} />
          <Route path='/saved' render={() => {
            <SavedWords words={this.state.savedWords} />
          }} />
          <Route path='/topscorers' render={() => {
            <TopScorers words={this.state.topScorers} />
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
