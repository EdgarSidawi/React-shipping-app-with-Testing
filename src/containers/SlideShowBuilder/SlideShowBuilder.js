import React, { Component } from 'react';

import SlideShow from '../../components/SlideShow/SlideShow';
import classes from './SlideShowBuilder.module.css';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';

class SlideShowBuilder extends Component {
  state = {
    data: [
      { id: 1, src: image1, caption: 'We have Global Reach' },
      { id: 2, src: image2, caption: 'All modes of delivery' },
      { id: 3, src: image3, caption: 'located worldwide' },
      { id: 4, src: image4, caption: 'We care for your valuables' }
    ]
  };

  render() {
    return (
      <div className={classes.SlideShowBuilder}>
        <SlideShow images={this.state.data} />
      </div>
    );
  }
}

export default SlideShowBuilder;
