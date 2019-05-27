import React from 'react';

import classes from './Footer.module.css';
import LowerFooter from './LowerFooter/LowerFooter';
import UpperFooter from './UpperFooter/UpperFooter';

const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.upperFooter}>
        <UpperFooter />
      </div>
      <div>
        <LowerFooter />
      </div>
    </div>
  );
};

export default footer;
