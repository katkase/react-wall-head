import React, { Component } from 'react';
import { DatePicker } from 'antd';

import logo from './logo.svg';
import classes from './App.module.less';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <h1 className={classes.title}>Welcome to React</h1>
        </header>
        <p className={classes.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker />
      </div>
    );
  }
}

export default App;
