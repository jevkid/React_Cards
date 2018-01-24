import React, { Component } from 'react';
import Toggle from './Toggles';
import Profile from './Profiles';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      titles: ["Eduction", "Skills", "Background", "Travel"]
    };
  }
  render() {
    
    return (
      <div className="container App-container">
        <Toggle toggleTitle="Education" toggleImg="https://image.flaticon.com/icons/png/512/182/182321.png"/>
        <Profile profileText="Hi, my name is Megan." profileTitle="Megan Jevin" profileImg="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/14543731_10153770224120755_6794586089208328001_o.jpg?oh=7c7521e7b4734bdceeeaec8658640e8e&oe=5ADEF430"/>
      </div>
    );
  }
}

export default App;
