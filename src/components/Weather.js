import React, { Component } from 'react';

class Weather extends Component {
  render() {
    let template = (
      <div>
        <p>Location: {this.props.city}, {this.props.country}</p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Humidity:{this.props.humidity}</p>
        <p>Conditions: {this.props.description}</p>
      </div>
    );
    if(this.props.city === undefined) {
      template = (
        <p>{this.props.error}
        </p>
      );
    }
    return (
      <div> 
        {template}
      </div>
    );
  }
}

export default Weather;