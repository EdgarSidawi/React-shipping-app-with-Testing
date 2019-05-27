import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';

const navigationItems = props => {
  return (
    <nav className={classes.NavigationItems}>
      <NavLink activeClassName={classes.active} to='/' exact>
        Home
      </NavLink>
      <NavLink activeClassName={classes.active} to='/About_us'>
        About_Us
      </NavLink>
      <NavLink activeClassName={classes.active} to='/tracking'>
        Tracking
      </NavLink>
      <NavLink activeClassName={classes.active} to='/location'>
        Location
      </NavLink>
      <NavLink activeClassName={classes.active} to='/contact'>
        Contact
      </NavLink>
    </nav>
  );
};

export default navigationItems;
