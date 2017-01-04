/**
 * Created by manhhailua on 1/5/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Home extends Component {
  render() {
    return (
      <Paper zDepth={0}>
        <p>Welcome to a meteor stater app.</p>
        <p>I am using React and Material-UI to be what being displayed.</p>
        <p>Home Page!</p>
      </Paper>
    );
  }
}

export default Home;
