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
    realFeel: undefined,
    description: undefined,
    windSpeed: undefined,
    humidity: undefined,
    pressure: undefined,
    uv: undefined,
    partOfDay: undefined,
    windDirectionTxt: undefined,
    windDirectionDeg: undefined,
    dewPoint: undefined,
    clouds: undefined,
    visibility: undefined,
    solarRadiation: undefined,
    rain: undefined,
    snow: undefined,
    sunrise: undefined,
    sunset: undefined,
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
        realFeel: data.data[0].app_temp,
        description: data.data[0].weather.description,
        windSpeed: data.data[0].wind_spd,
        humidity: data.data[0].rh,
        pressure: data.data[0].pres,
        uv: data.data[0].uv,
        partOfDay: data.data[0].pod,
        windDirectionTxt: data.data[0].wind_cdir,
        windDirectionDeg: data.data[0].wind_dir,
        dewPoint: data.data[0].dewpt,
        clouds: data.data[0].clouds,
        visibility: data.data[0].vis,
        solarRadiation: data.data[0].solar_rad,
        rain: data.data[0].precip,
        snow: data.data[0].snow,
        sunrise: data.data[0].sunrise,
        sunset: data.data[0].sunset,
        error: ""
      });
    } else {
      this.setState({
        icon: undefined,
        city: undefined,
        temperature: undefined,
        description: undefined,
        realFeel: undefined,
        windSpeed: undefined,
        humidity: undefined,
        pressure: undefined,
        uv: undefined,
        partOfDay: undefined,
        windDirectionTxt: undefined,
        windDirectionDeg: undefined,
        dewPoint: undefined,
        clouds: undefined,
        visibility: undefined,
        solarRadiation: undefined,
        rain: undefined,
        snow: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="col-md-8">
            <Form getWeather={this.getWeather} />
          </div>
          <div className="main-info container">
            <div className="row">
              <div className="current-weather-info col-md-4">
                <Weather
                  icon={this.state.icon}
                  city={this.state.city}
                  temperature={this.state.temperature}
                  realFeel={this.state.realFeel}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
              <div className="current-weather-info col-md-4">
                <Weather
                  windSpeed={this.state.windSpeed}
                  humidity={this.state.humidity}
                  pressure={this.state.pressure}
                  uv={this.state.uv}
                />
              </div>
              <div className="current-weather-info col-md-4">
                <Weather
                  partOfDay={this.state.partOfDay}
                  windDirectionTxt={this.state.windDirectionTxt}
                  windDirectionDeg={this.state.windDirectionDeg}
                  dewPoint={this.state.dewPoint}
                  clouds={this.state.clouds}
                  visibility={this.state.visibility}
                  solarRadiation={this.state.solarRadiation}
                  rain={this.state.rain}
                  snow={this.state.snow}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
