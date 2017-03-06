import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// const wrapperStyle = {
//   width: '100%',
//   padding: '0 calc(3% - 2px)'
// }


class App extends Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="notificationWrapper" >
        <div className="panel" >
          <Header title='Notification App' />
          <Content />
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;

