import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
//import logo from './logo.svg';
import GamesPage from './components/GamesPage';
import GameForm from './components/GameForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/get">Get</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/get/new">Insert</NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={() => (
            <h1>Shaun's MongoDB Env</h1>
          )}/>
          <Route exact path="/get" component={GamesPage} />
          <Route path="/get/new" component={GameForm} />
          <Route path="/get/:_id" component={GameForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

/*

import svg and images, etc.

<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Welcome to React</h2>
</div>*/
