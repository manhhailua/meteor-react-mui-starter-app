/**
 * Created by manhhailua on 1/5/17.
 */

import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import BottomBar from '../components/BottomBar';
import Content from '../components/Content';
import TopBar from '../components/TopBar';

class NotFound extends Component {

  render() {
    return (
      <Paper>
        <TopBar />
        <Content>
          <h1>404</h1>
          <p>Oops! Not Found!</p>
        </Content>
        <BottomBar />
      </Paper>
    );
  }

}

export default NotFound;
