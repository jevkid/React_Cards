import React, { Component } from 'react';
import Card from './Cards';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      images: [],
      links: [],
      titles: []
    };
  }
  render() {
    let flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3062e14712f0ed9b5f0b78a37e9c9b0d&user_id=101237360@N07&format=json&nojsoncallback=?'
    let images = [];
    let links = [];
    let titles = [];
    
    fetch(flickrUrl)  
    .then(results => {
      return results.json();
    }).then(data => {
      let photo = data.photos.photo;
      for(var i = 0; i < 10; i++){
        let imageUrl = `https://farm${photo[i].farm}.staticflickr.com/${photo[i].server}/${photo[i].id}_${photo[i].secret}.jpg`;
        let imageHref = `https://www.flickr.com/photos/nashwales/${photo[i].id}`;
        images.push(imageUrl);
        links.push(imageHref);
        titles.push(photo[i].title);
      }
      this.setState({images: images, links: links, titles: titles});
    })

    return (
      <div className="container App-container">
        {this.state.images.map((images, index) => (        
          <Card cardTitle={this.state.titles[index]} cardImg={this.state.images[index]}/>
        ))}
      </div>
    );
  }
}

export default App;
