import React from 'react';

import Content from '../Content';
import image1 from '../../../assets/images/image1.jpg';

const home = () => {
  const pageContent = `My Shipping Company is an International Freight forwarding Company
    in the world. It has formed in the year 2012 with a dedicated team
    of professionals having wide experience in the field of freight
    forwarding. FlagStar Shipping enables customers from anywhere in the
    world to buy directly from any U.S. store or individual. Customers
    do not need a U.S. address. Simply use our U.S. address as your own.
    Once your package is delivered to us locally, we then forward your
    shipment directly to your country. FlagStar Shipping is a
    professional Freight Forwarding Company who has been giving all type
    of logistics support successfully and to the full satisfaction of
    its valued clients. We always look to provide excellent, quality
    service with proposed functionality to match client’s concept. Our
    qualified and experienced team of professionals is committed to
    helping you to build your business in the future. Really Awesome`;

  return (
    <Content
      image={image1}
      header='WELCOME TO MY SHIPPING COMPANY'
      content={pageContent}
    />
  );
};
export default home;
