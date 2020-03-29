import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import Cities from '../Cities/Cities';

const apiKey = 'ce96de25f5984c07a75e087c2285c9b1';
let units = 'metric';

const url_1 = `https://api.weatherbit.io/v2.0/current?city=London,UK&key=${apiKey}&units=${units}`;
const url_2 = `https://api.weatherbit.io/v2.0/current?city=New_York_City,US&key=${apiKey}&units=${units}`;
const url_3 = `https://api.weatherbit.io/v2.0/current?city=Tokyo,JP&key=${apiKey}&units=${units}`

export default class Home extends Component {

    state = {
        icon_1: undefined,
        city_1: undefined,
        country_1: undefined,
        temperature_1: undefined,
        realFeel_1: undefined,
        description_1: undefined,
        humidity_1: undefined,
        uv_1: undefined,
        aqi_1: undefined,
        icon_2: undefined,
        city_2: undefined,
        country_2: undefined,
        temperature_2: undefined,
        realFeel_2: undefined,
        description_2: undefined,
        humidity_2: undefined,
        uv_2: undefined,
        aqi_2: undefined,
        icon_3: undefined,
        city_3: undefined,
        country_3: undefined,
        temperature_3: undefined,
        realFeel_3: undefined,
        description_3: undefined,
        humidity_3: undefined,
        uv_3: undefined,
        aqi_3: undefined
    }

    componentDidMount() {
        axios.get(url_1)
            .then(res => {
                let data_citiesWeather = res.data;
                console.log(data_citiesWeather);
                this.setState({
                    icon_1: data_citiesWeather.data[0].weather.icon,
                    city_1: data_citiesWeather.data[0].city_name,
                    country_1: data_citiesWeather.data[0].country_code,
                    temperature_1: data_citiesWeather.data[0].temp,
                    realFeel_1: data_citiesWeather.data[0].app_temp,
                    description_1: data_citiesWeather.data[0].weather.description,
                    humidity_1: data_citiesWeather.data[0].rh,
                    uv_1: data_citiesWeather.data[0].uv,
                    aqi_1: data_citiesWeather.data[0].aqi
                });
            }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });
        axios.get(url_2)
            .then(res => {
                let data_citiesWeather = res.data;
                console.log(data_citiesWeather);
                this.setState({
                    icon_2: data_citiesWeather.data[0].weather.icon,
                    city_2: data_citiesWeather.data[0].city_name,
                    country_2: data_citiesWeather.data[0].country_code,
                    temperature_2: data_citiesWeather.data[0].temp,
                    realFeel_2: data_citiesWeather.data[0].app_temp,
                    description_2: data_citiesWeather.data[0].weather.description,
                    humidity_2: data_citiesWeather.data[0].rh,
                    uv_2: data_citiesWeather.data[0].uv,
                    aqi_2: data_citiesWeather.data[0].aqi
                });
            }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });
        axios.get(url_3)
            .then(res => {
                let data_citiesWeather = res.data;
                console.log(data_citiesWeather);
                this.setState({
                    icon_3: data_citiesWeather.data[0].weather.icon,
                    city_3: data_citiesWeather.data[0].city_name,
                    country_3: data_citiesWeather.data[0].country_code,
                    temperature_3: data_citiesWeather.data[0].temp,
                    realFeel_3: data_citiesWeather.data[0].app_temp,
                    description_3: data_citiesWeather.data[0].weather.description,
                    humidity_3: data_citiesWeather.data[0].rh,
                    uv_3: data_citiesWeather.data[0].uv,
                    aqi_3: data_citiesWeather.data[0].aqi
                });
            }).catch(err => { if (err) console.error("Cannot fetch data from API, ", err); });
    }

    render() {
        const { icon_1, city_1, country_1, temperature_1, realFeel_1, description_1, humidity_1, uv_1, aqi_1,
            icon_2, city_2, country_2, temperature_2, realFeel_2, description_2, humidity_2, uv_2, aqi_2,
            icon_3, city_3, country_3, temperature_3, realFeel_3, description_3, humidity_3, uv_3, aqi_3 } = this.state;

        return (
            <div>
                <Cities
                    icon_1={icon_1}
                    city_1={city_1}
                    country_1={country_1}
                    temperature_1={temperature_1}
                    realFeel_1={realFeel_1}
                    description_1={description_1}
                    humidity_1={humidity_1}
                    uv_1={uv_1}
                    aqi_1={aqi_1}
                    icon_2={icon_2}
                    city_2={city_2}
                    country_2={country_2}
                    temperature_2={temperature_2}
                    realFeel_2={realFeel_2}
                    description_2={description_2}
                    humidity_2={humidity_2}
                    uv_2={uv_2}
                    aqi_2={aqi_2}
                    icon_3={icon_3}
                    city_3={city_3}
                    country_3={country_3}
                    temperature_3={temperature_3}
                    realFeel_3={realFeel_3}
                    description_3={description_3}
                    humidity_3={humidity_3}
                    uv_3={uv_3}
                    aqi_3={aqi_3}
                />
            </div>
        );
    }
}
