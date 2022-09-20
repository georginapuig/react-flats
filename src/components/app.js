import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './FlatList';

import Marker from './Marker';
import GoogleMapReact from 'google-map-react';

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

  center() {
    console.log(this.state.selectedFlat.lat);

    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
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
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={15}>
            <Marker 
              lat={this.state.selectedFlat.lat} 
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
