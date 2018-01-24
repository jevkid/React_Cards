import React, { Component } from 'react';
import './index.css';

class Toggle extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: props.toggleTitle,
        logo: props.toggleImg,
        link: props.toggleLink
      };
    }
  render() {
    
    return (
      <div className="Toggle-card">
        <img src={this.state.logo} className="Toggle-logo" alt={this.state.title} />
      </div>
    );
  }
}

export default Toggle;