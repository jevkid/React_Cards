import React, { Component } from 'react';
import './index.css';

class Card extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: props.cardTitle,
        logo: props.cardImg
      };
    }
  render() {
    
    return (
      <div className="Card-card">
        <img src={this.state.logo} className="Card-logo" alt={this.state.title} />
        <div className="Card-title">{this.state.title}</div>
      </div>
    );
  }
}

export default Card;