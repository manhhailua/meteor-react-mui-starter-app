/**
 * Created by manhhailua on 1/5/17.
 */

import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import BottomBar from '../components/BottomBar';
import Content from '../components/Content';
import TopBar from '../components/TopBar';

class Home extends Component {

  render() {
    return (
      <Paper>
        <TopBar />
        <Content>
          <p>Welcome to a meteor stater app.</p>
          <p>I am using React and Material-UI to be what being displayed.</p>
          <p>Home Page!</p>
        </Content>
        <BottomBar />
      </Paper>
    );
  }

}

export default Home;
