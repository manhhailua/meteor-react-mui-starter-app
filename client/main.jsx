/* global document */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from '../imports/routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>,
    document.getElementById('app'),
  );
});
