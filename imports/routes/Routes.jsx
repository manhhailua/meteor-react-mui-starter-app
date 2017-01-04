/**
 * Created by manhhailua on 1/5/17.
 */

/* eslint-disable import/prefer-default-export */

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../ui/components/App.jsx';
import Home from '../ui/pages/Home.jsx';
import Shopping from '../ui/pages/Shopping.jsx';
import Order from '../ui/pages/Order.jsx';
import Page404 from '../ui/pages/404.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="shopping" component={Shopping} />
          <Route path="order" component={Order} />
          <Route path="*" component={Page404} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
