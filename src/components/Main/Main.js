import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from '../Form/Form';
import Weather from '../Weather/Weather';
import Forecast from '../Forecast/Forecast';

const apiKey = 'ce96de25f5984c07a75e087c2285c9b1';
let units = 'metric';

class App extends Component {
  state = {
    cityCurrentTimeFormatted: undefined,
    icon: undefined,
    city: undefined,
    temperature: undefined,
    realFeel: undefined,
    description: undefined,
    aqi: undefined,
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
    forecastDays: undefined,
    day: undefined,
    error: undefined
  }

  getCitiesWeather = async () => {
    axios.get(`https://api.weatherbit.io/v2.0/current?city=London&key=${apiKey}&units=${units}`)
      .then(res => {
        let data_citiesWeather = res.data;
        console.log(data_citiesWeather);

        this.setState({
          icon: data_citiesWeather.data[0].weather.icon,
          city: data_citiesWeather.data[0].city_name,
          temperature: data_citiesWeather.data[0].temp,
          realFeel: data_citiesWeather.data[0].app_temp,
          description: data_citiesWeather.data[0].weather.description,
          humidity: data_citiesWeather.data[0].rh,
          uv: data_citiesWeather.data[0].uv,
          aqi: data_citiesWeather.data[0].aqi
        });
      }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=${units}`)
        .then(res => {
          let data_currentWeather = res.data;
          console.log(data_currentWeather);

          this.setState({
            icon: data_currentWeather.data[0].weather.icon,
            city: data_currentWeather.data[0].city_name,
            temperature: data_currentWeather.data[0].temp,
            realFeel: data_currentWeather.data[0].app_temp,
            description: data_currentWeather.data[0].weather.description,
            windSpeed: data_currentWeather.data[0].wind_spd,
            humidity: data_currentWeather.data[0].rh,
            pressure: data_currentWeather.data[0].pres,
            uv: data_currentWeather.data[0].uv,
            partOfDay: data_currentWeather.data[0].pod,
            windDirectionTxt: data_currentWeather.data[0].wind_cdir,
            windDirectionDeg: data_currentWeather.data[0].wind_dir,
            dewPoint: data_currentWeather.data[0].dewpt,
            clouds: data_currentWeather.data[0].clouds,
            visibility: data_currentWeather.data[0].vis,
            solarRadiation: data_currentWeather.data[0].solar_rad,
            rain: data_currentWeather.data[0].precip,
            snow: data_currentWeather.data[0].snow,
            sunrise: data_currentWeather.data[0].sunrise,
            sunset: data_currentWeather.data[0].sunset,
            aqi: data_currentWeather.data[0].aqi
          });
        }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });

      axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&units=${units}&days=6`)
        .then(res => {
          let data_forecastDaily = res.data;
          console.log(data_forecastDaily);
          this.setState({
            forecastDays: data_forecastDaily.data
          });
        }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });
    }
  }

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          icon={this.state.icon}
          city={this.state.city}
          temperature={this.state.temperature}
          realFeel={this.state.realFeel}
          description={this.state.description}
          aqi={this.state.aqi}
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          uv={this.state.uv}
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
          error={this.state.error}
        />
        <div className="container">
          {this.state.forecastDays && this.state.forecastDays.slice(1).map((day, index) => {
            return <Forecast day={day} key={index} />
          })}
        </div>
      </div>
    );
  }
};

export default App;