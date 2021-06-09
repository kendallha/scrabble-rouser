
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      error: ''
    }

  }
  render () {
    return (
      <Header />
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <Welcome />
          )
        }}
      </Switch>
    );
  }
}

export default App;
