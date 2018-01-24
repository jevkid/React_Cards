import React, { Component } from 'react';
import './index.css';

class Profile extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: props.profileTitle,
        text: props.profileText,
        image: props.profileImg

      };
    }
  render() {
    
    return (
      <div className="Profile-card">
        <img src={this.state.image} className="Profile-image" alt={this.state.title}></img>
        <div className="Profile-title">{this.state.title}</div>
        <div className="Profile-text">{this.state.text}</div>
      </div>
    );
  }
}

export default Profile;