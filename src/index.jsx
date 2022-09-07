import React from 'react';
import ReactDOM from 'react-dom';
import Flat from './components/Flat'
import SimpleMap from './components/GoogleMap'

import '../assets/stylesheets/application.scss';

const Hello = () => {
  return (
    <div>
      <div className="flat-list">
        <Flat />
      </div>
      
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
