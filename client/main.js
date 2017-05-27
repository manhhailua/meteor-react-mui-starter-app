/* global document */

import { MuiThemeProvider } from 'material-ui/styles';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from '../imports/ui/components/App';

Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
    document.getElementById('app'),
  );
});
