import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={classes.Layout}>
          <Toolbar />
        </header>
        <div>
          <main className={classes.main}>{this.props.children}</main>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
