import React from 'react';
import ReactDOM from 'react-dom';
import FlatList from './components/FlatList'
import SimpleMap from './components/GoogleMap'

import '../assets/stylesheets/application.scss';

const Hello = () => {
  return (
    <div>
      <FlatList />
      
      <div className="map-container">
        <SimpleMap />
      </div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello />, root);
}
