/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TopBar from './TopBar';
import Content from './Content';
import BottomBar from './BottomBar';

// App component - represents the whole app
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <Paper>
        <TopBar />
        <Content>{this.props.children}</Content>
        <BottomBar />
      </Paper>
    );
  }
}

export default App;
