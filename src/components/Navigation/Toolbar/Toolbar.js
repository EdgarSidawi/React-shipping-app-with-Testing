import React from 'react';
import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Users from '../Users/Users';
import Logo from '../Logo/Logo';

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.navigation}>
        <NavigationItems />
      </div>
      <div className={classes.user}>
        <Users />
      </div>
    </header>
  );
};

export default toolbar;
