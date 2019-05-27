import React from 'react';

import classes from './BackDrop.module.css';

const backDrop = props => {
  return props.show ? (
    <div className={classes.backDrop} onClick={props.clicked} />
  ) : null;
};

export default backDrop;
