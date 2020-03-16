import React, { Component } from 'react';
import './App.css';
import { ImageList } from './components/image-list/image-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      items: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .then(res => res.json())
      .then(res => this.setState({items: res.items || []}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { searchField, items } = this.state;
    const filteredItems = items.filter(({tags, titls }) => {
      return tags.toLowerCase().includes(searchField.toLowerCase()) ||
        titls.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1>Flickr Photo Stream</h1>
        <SearchBox
          placeholder="tags or firstName"
          handleChange={ this.handleChange } >
        </SearchBox>
        <ImageList items={ filteredItems }>
        </ImageList>
      </div>
    )
  }
}

export default App;
