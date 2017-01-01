/**
 * Created by manhhailua on 1/2/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <Paper className="content">
        <p>Welcome to a meteor stater app.</p>
        <p>I am using React and Material-UI to be what being displayed.</p>
      </Paper>
    );
  }
}

export default Content;
