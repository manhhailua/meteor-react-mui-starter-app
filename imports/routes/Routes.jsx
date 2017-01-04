/**
 * Created by manhhailua on 1/5/17.
 */

/* eslint-disable import/prefer-default-export */

import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/components/App.jsx';
import Home from '../ui/pages/Home.jsx';
import Shopping from '../ui/pages/Shopping.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="shopping" component={Shopping} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
