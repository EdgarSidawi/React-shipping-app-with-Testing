import React from 'react';

import classes from './LowerFooter.module.css';

const lowerFooter = () => {
  return (
    <div className={classes.LowerFooter}>
      <p>Copyright © 2019 My Shipping Company Name</p>
      <ul>
        <li>
          <a href='/'>Terms and Conditions</a>
        </li>{' '}
        |
        <li>
          <a href='/'>Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default lowerFooter;
