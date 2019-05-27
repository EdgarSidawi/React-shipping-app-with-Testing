import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../BackDrop/BackDrop';

class Modal extends Component {
  render() {
    let custom = null;
    if (this.props.custom) {
      custom = { width: '80%', height: '80%', left: '10%', top: '10%' };
    }
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div
          className={classes.Modal}
          style={custom}
          // style={{ width: '90%' }}
          // style={{
          //   transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          //   opacity: this.props.show ? '1' : '0'
          // }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
