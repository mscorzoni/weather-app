import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import APIKEY from './env';

const API_KEY = APIKEY;

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if(city && country) {
      
      const api_call = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}` );
      const data = await api_call.json();
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        error: "Please enter values"
      });

    }

  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          city={this.state.city}
          temperature={this.state.temperature}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
