import React, { Component } from 'react'

export default class Flat extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-category">
          {this.props.price}
          <span> {this.props.priceCurrency}</span>
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}
