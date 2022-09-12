import React, { Component } from 'react'
import flats from '../data/flats'
import Flat from './Flat';

export default class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {flats.map(flat => {
          console.log(flat);
          return <Flat price={flat.price} priceCurrency={flat.priceCurrency} name={flat.name} />
        })}
      </div>
    )
  }
}
