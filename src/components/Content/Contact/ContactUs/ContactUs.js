import React from 'react';

import classes from './ContactUs.module.css';

const contactUs = () => {
  return (
    <div className={classes.contactUs}>
      <h3>CONTACT US</h3>
      <hr />
      <div className={classes.contactInfo}>
        <ul>
          <li id={classes.header}>Address :</li>
          <li>
            Old Hall Road, Bromborough, Wirral, Merseyside CH62 3NX United
            Kingdom
          </li>
        </ul>
        <ul>
          <li id={classes.header}>E-mail :</li>
          <li>
            <a href='/'>info.myshippingcompany.com</a>
          </li>
        </ul>
        <ul>
          <li id={classes.header}>Website</li>
          <li>
            <a href='/'>wwww.myshippingcompany.com</a>
          </li>
        </ul>
        <ul>
          <li id={classes.header}>Telephone Number :</li>
          <li>+1(203)544-4183</li>
        </ul>
        <ul>
          <li>
            <strong>
              Our Office Hours Monday to Friday from 8:00A.M to 6:00 P.M
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default contactUs;
