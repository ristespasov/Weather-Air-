import React, { Component } from 'react';

import Form from "./components/Form";
import Weather from "./components/Weather";

const apiKey = '835041d0eac24acb9b5748839af27a23';
let units = 'metric';

class App extends Component {
  state = {
    icon: undefined,
    city: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=${units}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
        icon: data.data[0].weather.icon,
        city: data.data[0].city_name,
        temperature: data.data[0].temp,
        description: data.data[0].weather.description,
        windSpeed: data.data[0].wind_spd,
        humidity: data.data[0].rh,
        pressure: data.data[0].pres,
        uv: data.data[0].uv,
        error: ""
      });
    } else {
      this.setState({
        icon: undefined,
        city: undefined,
        temperature: undefined,
        description: undefined,
        windSpeed: undefined,
        humidity: undefined,
        pressure: undefined,
        uv: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    icon={this.state.icon}
                    city={this.state.city}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
                <div>
                  <Weather
                    windSpeed={this.state.windSpeed}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    uv={this.state.uv}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
