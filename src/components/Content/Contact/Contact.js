import React from 'react';

import classes from './Contact.module.css';
import ContactUs from './ContactUs/ContactUs';
import QuickMessage from './QuickMessage/QuickMessage';
import image3 from '../../../assets/images/image3.jpg';

const contact = () => {
  return (
    <div className={classes.Content}>
      <div className={classes.contact}>
        <div className={classes.leftSide}>
          <ContactUs />
        </div>
        <div className={classes.rightSide}>
          <figure>
            <img src={image3} alt='courier' />
          </figure>
        </div>
      </div>
      {/* <div className={classes.message}> */}
      <QuickMessage />
      {/* </div> */}
    </div>
  );
};

export default contact;
