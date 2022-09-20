import React, { Component } from 'react'
import Flat from './Flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        console.log(props.selectedFlat.name);
        return (
          <Flat
            key={flat.lat}
            flat={flat}
            index={index}
            selected={flat.name == props.selectedFlat.name}
            selectFlat={props.selectFlat}
          />
        )
      })}
    </div>
  )
}

export default FlatList;