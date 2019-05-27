import React from 'react';
import SwiftSlider from 'react-swift-slider';

const slideShow = props => {
  return (
    <SwiftSlider
      data={props.images}
      enableNextAndPrev={true}
      showDots={false}
    />
  );
};

export default slideShow;
