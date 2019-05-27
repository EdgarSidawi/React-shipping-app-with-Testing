import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './UpperFooter.module.css';

const upperFooter = () => {
  return (
    <div>
      <nav className={classes.upperFooter}>
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
    </div>
  );
};

export default upperFooter;
