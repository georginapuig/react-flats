import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './FlatList';
import SimpleMap from './GoogleMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList 
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat} 
          selectFlat={this.selectFlat} 
        />
        
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
