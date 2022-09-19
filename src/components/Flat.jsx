import React, { Component } from 'react'

export default class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false }
  }

  handleClick = () => {
    this.setState({addClass: !this.state.addClass});
  }

  render() {
    return (
      <div 
        className={this.state.addClass ? "card active" : "card"}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.imageUrl})`
        }}>
        <div className="card-category">
          {this.props.price}
          <span> {this.props.priceCurrency}</span>
        </div>

        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}
