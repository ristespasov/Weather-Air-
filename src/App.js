import React, { Component } from 'react';

import Form from './components/Form';
import Icon from './components/Icon';
import Weather from './components/Weather';
import AirQuality from './components/AirQuality';

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
    aqi: undefined,
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
        aqi: data.data[0].aqi,
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
        aqi: undefined,
        error: "Please enter the values."
      });
    }

    let counter = document.getElementById('counter').getContext('2d');
    let no = 0;
    let pointToFill = 4.72;
    let cw = counter.canvas.width;
    let ch = counter.canvas.height;
    let diff;

    function fillCounter() {

      counter.textAlign = 'center';
      counter.font = '25px Quicksand, sans-serif';
      counter.clearRect(0, 0, cw, ch);
      counter.lineWidth = 15;
      counter.fillStyle = '#fff';

      diff = ((no / 100) * Math.PI * 2 * 10);

      if (no > 0 && no <= 50) {
        counter.strokeStyle = 'rgba(0, 255, 0, 0.5)';
        counter.fillText(no, 100, 75);
        counter.fillText('/100 AQI', 100, 110);
        counter.fillText('Good', 100, 145);
      } else if (no >= 51 && no <= 100) {
        counter.strokeStyle = 'rgba(255, 255, 0, 0.5)';
        counter.fillText(no, 100, 75);
        counter.fillText('/100 AQI', 100, 110);
        counter.fillText('Moderate', 100, 145);
      } else if (no >= 101) {
        counter.strokeStyle = 'rgba(255, 0, 0, 0.5)';
        counter.fillText(no, 100, 75);
        counter.fillText('/100 AQI', 100, 110);
        counter.fillText('Poor', 100, 145);
      } else if (no === 0) {
        counter.fillText('N/A', 100, 90);
        counter.fillText('/100 AQI', 100, 125);
      }

      counter.beginPath();
      counter.arc(100, 100, 90, pointToFill, diff / 10 + pointToFill);
      counter.stroke();

      if (no === data.data[0].aqi) {
        clearTimeout(fill);
      }
      no++;
    }

    let fill = setInterval(fillCounter, 30);

    if (no > 100) {
      setInterval(fillCounter, 5);
    }
  }


  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="forms-buttons">
            <Form getWeather={this.getWeather} />
          </div>
        </div>
        <div className="main-info container">
          <div className="row">
            <div className="current-weather-info col-md-4">
              <Icon
                icon={this.state.icon}
              />
              <Weather
                city={this.state.city}
                temperature={this.state.temperature}
                realFeel={this.state.realFeel}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
            <div className="current-weather-info col-md-4">
              <div>
                <AirQuality
                  aqi={this.state.aqi}
                />
              </div>
              <div className="current-weather-basic-div">
                <Weather
                  windSpeed={this.state.windSpeed}
                  humidity={this.state.humidity}
                  pressure={this.state.pressure}
                  uv={this.state.uv}
                />
              </div>

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
    );
  }
};

export default App;