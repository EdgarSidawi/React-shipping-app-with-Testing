import React from 'react';

import classes from './Content.module.css';

const content = props => {
  return (
    <div className={classes.Content}>
      <div className={classes.contentInfo}>
        <div className={classes.leftSide}>
          <figure>
            <img src={props.image} alt='slider' />
          </figure>
        </div>
        <div className={classes.rightSide}>
          <h3>{props.header}</h3>
          <hr />
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default content;
