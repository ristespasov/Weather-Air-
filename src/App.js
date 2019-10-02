import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Icon from './components/Icon/Icon';
import Weather from './components/Weather/Weather';
import AirQuality from './components/AirQuality/AirQuality';
import HourlyWeather from './components/HourlyWeather/HourlyWeather';

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
    h_hour_1: undefined,
    h_hour_2: undefined,
    h_hour_3: undefined,
    h_hour_4: undefined,
    h_hour_5: undefined,
    h_hour_6: undefined,
    h_icon_1: undefined,
    h_icon_2: undefined,
    h_icon_3: undefined,
    h_icon_4: undefined,
    h_icon_5: undefined,
    h_icon_6: undefined,
    h_temp_1: undefined,
    h_temp_2: undefined,
    h_temp_3: undefined,
    h_temp_4: undefined,
    h_temp_5: undefined,
    h_temp_6: undefined,
    h_realFeel_1: undefined,
    h_realFeel_2: undefined,
    h_realFeel_3: undefined,
    h_realFeel_4: undefined,
    h_realFeel_5: undefined,
    h_realFeel_6: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=${units}`);
    const data = await api_call.json();

    const api_hourly = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${apiKey}&hours=24`);
    const dataHourly = await api_hourly.json();

    if (city) {
      console.log(data);
      console.log(dataHourly);
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
        h_hour_1: dataHourly.data[3].timestamp_utc,
        h_icon_1: dataHourly.data[3].weather.icon,
        h_temp_1: dataHourly.data[3].temp,
        h_realFeel_1: dataHourly.data[3].app_temp,
        h_hour_2: dataHourly.data[7].timestamp_utc,
        h_icon_2: dataHourly.data[7].weather.icon,
        h_temp_2: dataHourly.data[7].temp,
        h_realFeel_2: dataHourly.data[7].app_temp,
        h_hour_3: dataHourly.data[11].timestamp_utc,
        h_icon_3: dataHourly.data[11].weather.icon,
        h_temp_3: dataHourly.data[11].temp,
        h_realFeel_3: dataHourly.data[11].app_temp,
        h_hour_4: dataHourly.data[15].timestamp_utc,
        h_icon_4: dataHourly.data[15].weather.icon,
        h_temp_4: dataHourly.data[15].temp,
        h_realFeel_4: dataHourly.data[15].app_temp,
        h_hour_5: dataHourly.data[19].timestamp_utc,
        h_icon_5: dataHourly.data[19].weather.icon,
        h_temp_5: dataHourly.data[19].temp,
        h_realFeel_5: dataHourly.data[19].app_temp,
        h_hour_6: dataHourly.data[23].timestamp_utc,
        h_icon_6: dataHourly.data[23].weather.icon,
        h_temp_6: dataHourly.data[23].temp,
        h_realFeel_6: dataHourly.data[23].app_temp,
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
        h_hour_1: undefined,
        h_hour_2: undefined,
        h_hour_3: undefined,
        h_hour_4: undefined,
        h_hour_5: undefined,
        h_hour_6: undefined,
        h_icon_1: undefined,
        h_icon_2: undefined,
        h_icon_3: undefined,
        h_icon_4: undefined,
        h_icon_5: undefined,
        h_icon_6: undefined,
        h_temp_1: undefined,
        h_temp_2: undefined,
        h_temp_3: undefined,
        h_temp_4: undefined,
        h_temp_5: undefined,
        h_temp_6: undefined,
        h_realFeel_1: undefined,
        h_realFeel_2: undefined,
        h_realFeel_3: undefined,
        h_realFeel_4: undefined,
        h_realFeel_5: undefined,
        h_realFeel_6: undefined,
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
        {/* NAVBAR */}
        <div>
          <Navbar />
        </div>
        {/* SEARCH FORM */}
        <div className="container text-center">
          <div className="forms-buttons">
            <Form getWeather={this.getWeather} />
          </div>
        </div>
        {/* WEATHER INFO */}
        <div id="accordion" className="container">
          {/* Current weather & air info */}
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseOne">Current weather</a>
            </div>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <div className="card-body">
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
          </div>
          {/* Hourly forecast info */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Hourly forecast</a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_1={this.state.h_hour_1}
                      h_icon_1={this.state.h_icon_1}
                      h_temp_1={this.state.h_temp_1}
                      h_realFeel_1={this.state.h_realFeel_1}
                    />
                  </div>
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_2={this.state.h_hour_2}
                      h_icon_2={this.state.h_icon_2}
                      h_temp_2={this.state.h_temp_2}
                      h_realFeel_2={this.state.h_realFeel_2}
                    />
                  </div>
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_3={this.state.h_hour_3}
                      h_icon_3={this.state.h_icon_3}
                      h_temp_3={this.state.h_temp_3}
                      h_realFeel_3={this.state.h_realFeel_3}
                    />
                  </div>
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_4={this.state.h_hour_4}
                      h_icon_4={this.state.h_icon_4}
                      h_temp_4={this.state.h_temp_4}
                      h_realFeel_4={this.state.h_realFeel_4}
                    />
                  </div>
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_5={this.state.h_hour_5}
                      h_icon_5={this.state.h_icon_5}
                      h_temp_5={this.state.h_temp_5}
                      h_realFeel_5={this.state.h_realFeel_5}
                    />
                  </div>
                  <div className="col-md-2">
                    <HourlyWeather
                      h_hour_6={this.state.h_hour_6}
                      h_icon_6={this.state.h_icon_6}
                      h_temp_6={this.state.h_temp_6}
                      h_realFeel_6={this.state.h_realFeel_6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Daily forecast info */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">Daily forecast</a>
            </div>
            <div id="collapseThree" className="collapse" data-parent="#accordion">
              <div className="card-body"> Content for Accordion #3.</div>
            </div>
          </div>

          {/* <div className="main-info container"> */}
          {/* <div className="row">
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
          </div> */}
          <div className="container">
            {/* <div className="row">
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_1={this.state.h_hour_1}
                  h_temp_1={this.state.h_temp_1}
                  h_realFeel_1={this.state.h_realFeel_1}
                />
              </div>
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_2={this.state.h_hour_2}
                  h_temp_2={this.state.h_temp_2}
                  h_realFeel_2={this.state.h_realFeel_2}
                />
              </div>
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_3={this.state.h_hour_3}
                  h_temp_3={this.state.h_temp_3}
                  h_realFeel_3={this.state.h_realFeel_3}
                />
              </div>
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_4={this.state.h_hour_4}
                  h_temp_4={this.state.h_temp_4}
                  h_realFeel_4={this.state.h_realFeel_4}
                />
              </div>
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_5={this.state.h_hour_5}
                  h_temp_5={this.state.h_temp_5}
                  h_realFeel_5={this.state.h_realFeel_5}
                />
              </div>
              <div className="col-md-2">
                <HourlyWeather
                  h_hour_6={this.state.h_hour_6}
                  h_temp_6={this.state.h_temp_6}
                  h_realFeel_6={this.state.h_realFeel_6}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
};

export default App;