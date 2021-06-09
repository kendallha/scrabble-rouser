
import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Word from '../Word/Word';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
      <main>
        <Header />
        <Switch>
          <Route path='/learn' render={() => {
            <Word />
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


export default App;
