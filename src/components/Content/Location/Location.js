import React from 'react';

import './Location.css';

const location = () => {
  return (
    <div className='location'>
      <h3>OUR LOCATIONS</h3>
      <hr />
      <div className='locationInfo'>
        <ul>
          <li>
            <strong> USA</strong>
            <br /> 182-21 150th Avenue
            <br /> Springfield Gardens
            <br /> NY - 11413 <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
          <li>
            <strong>Germany</strong>
            <br /> Berliner Str. 102,
            <br />
            Ratingen
            <br /> 40880 Germany <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
          <li>
            <strong>Afghanistan</strong> <br />
            MOHEBI CENTRE BUILDING, 5th FLOOR
            <br />
            306 AL FAHEDI STREET
            <br />
            BUR DUBAI , DUBAI <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Greece</strong>
            <br />
            Capital Building, 5,
            <br />
            Iasonos Street
            <br />
            18537 Piraeus, Greece
            <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
          <li>
            <strong>Australia</strong>
            <br />
            18 Divett St,
            <br />
            Port Adelaide SA 5015
            <br />
            Australia
            <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
          <li>
            <strong>Ghana</strong>
            <br />
            18 James St
            <br />
            Accra - 00233
            <br />
            Ghana
            <br />
            <br />
            Enquiries: <a href='/'>Enquiries</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default location;
