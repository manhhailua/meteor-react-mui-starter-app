/**
 * Created by manhhailua on 1/5/17.
 */

import createBrowserHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Shopping from '../pages/Shopping';

const history = createBrowserHistory();

class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/order" component={Order} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }

}

export default Routes;
