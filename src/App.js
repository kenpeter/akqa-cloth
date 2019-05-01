/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import store from './store';
import Products from './containers/Products';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route component={Products} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
