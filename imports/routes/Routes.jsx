/**
 * Created by manhhailua on 1/5/17.
 */

/* eslint-disable import/prefer-default-export */

import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/components/App.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={<p>Home</p>} />
          <Route path="shopping" component={<p>Shopping</p>} />
          <Route path="*" component={<p>Not Found!</p>} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
