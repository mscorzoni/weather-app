import React from 'react';

const weather = (props) => {
  let template = (
    <div>
      <p>Location: {props.city}, {props.country}</p>
      <p>Temperature: {props.temperature}</p>
      <p>Humidity:{props.humidity}</p>
      <p>Conditions: {props.description}</p>
    </div>
  );
  if (props.city === undefined) {
    template = (
      <p>{props.error}
      </p>
    );
  }
  return (
    <div>
      {template}
    </div>
  );
}

export default weather;