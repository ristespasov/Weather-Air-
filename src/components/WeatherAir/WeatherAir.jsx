import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// AXIOS
import axios from 'axios';

// CONTEXT
import Context from '../../Context/Context';

// COMPONENTS
import Form from '../Form/Form';
import Weather from '../Weather/Weather';
import Forecast from '../Forecast/Forecast';
import Loading from '../Loading/Loading';

const apiKey = 'ce96de25f5984c07a75e087c2285c9b1';
const units = 'metric';
const App = () => {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);


  const getWeather = async e => {
    setLoading(true)

    e.preventDefault();
    const city = e.target.elements.city.value;
    const numDays = 6;

    const urlCurrent = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=${units}`;
    const urlForecast = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&units=${units}&days=${numDays}`;

    if (city) {
      try {
        const request = await axios.get(urlCurrent);
        const data = request.data.data[0];
        const requestForecast = await axios.get(urlForecast);
        const dataForecast = requestForecast.data.data;
        setWeather({
          icon: data.weather.icon,
          city: data.city_name,
          temperature: data.temp,
          realFeel: data.app_temp,
          weatherDescription: data.weather.description,
          windSpeed: data.wind_spd,
          humidity: data.rh,
          pressure: data.pres,
          uv: data.uv,
          partOfDay: data.pod,
          windDirectionTxt: data.wind_cdir,
          windDirectionDeg: data.wind_dir,
          dewPoint: data.dewpt,
          clouds: data.clouds,
          visibility: data.vis,
          solarRadiation: data.solar_rad,
          rain: data.precip,
          snow: data.snow,
          sunrise: data.sunrise,
          sunset: data.sunset,
          aqi: data.aqi
        });
        setForecast(dataForecast)
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  }

  return (
    <div>
      <Context.Provider value={{ getWeather, weather, forecast }}>
        <Form />
        {loading ? <Loading /> : weather ? <Weather /> : null}
        {loading ? <Loading /> : forecast ? <Forecast /> : null}
      </Context.Provider>
    </div>
  );
};

export default App;