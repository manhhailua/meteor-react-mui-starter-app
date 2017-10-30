/**
 * Created by manhhailua on 1/1/17.
 */
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NotFound from '../../pages/404';
import Home from '../../pages/Home';
import Order from '../../pages/Order';
import Shopping from '../../pages/Shopping';

const history = createBrowserHistory();

// Needed for onTouchTap of Material-UI
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
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

export default App;
