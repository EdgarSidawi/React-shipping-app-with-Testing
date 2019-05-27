import React from 'react';

import logoImage from '../../../assets/images/logo.jpg';
import classes from './Logo.module.css';

const logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.logo_content}>
        <img src={logoImage} alt='My logo' />
      </div>
    </div>
  );
};

export default logo;
