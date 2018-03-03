import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import CardForm from './components/CardForm'

import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={CardForm}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
