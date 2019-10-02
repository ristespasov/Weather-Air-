import React from 'react';
import moment from 'moment';
import './HourlyWeather.css';
import thunderstormRain from '../../icons/thunderstorm-rain.png';
import thunderstormDrizzleDay from '../../icons/thunderstorm-drizzle-d.png';
import thunderstormDrizzleNight from '../../icons/thunderstorm-drizzle-n.png';
import hailDay from '../../icons/hail-d.png';
import hailNight from '../../icons/hail-n.png';
import drizzle from '../../icons/drizzle.png';
import rain from '../../icons/rain.png';
import showerRainDay from '../../icons/shower-rain-d.png';
import showerRainNight from '../../icons/shower-rain-n.png';
import snow from '../../icons/snow.png';
import rainSnow from '../../icons/rain-snow.png';
import sleet from '../../icons/sleet.png';
import fogDay from '../../icons/fog-d.png';
import fogNight from '../../icons/fog-n.png';
import clearSkyDay from '../../icons/clear-sky-d.png';
import clearSkyNight from '../../icons/clear-sky-n.png';
import fewCloudsDay from '../../icons/few-clouds-d.png';
import fewCloudsNight from '../../icons/few-clouds-n.png';
import clouds from '../../icons/clouds.png';
import unknown from '../../icons/unknown.png';

const HourlyWeather = props => (

    <div>
        {
            props.h_hour_1 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_1).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_1 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_1).format('ddd')}</span></p>
        }
        {
            props.h_icon_1 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 't01d' || props.h_icon_1 === 't01n' || props.h_icon_1 === 't02d' || props.h_icon_1 === 't02n' || props.h_icon_1 === 't03d' || props.h_icon_1 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'd01d' || props.h_icon_1 === 'd01n' || props.h_icon_1 === 'd02d' || props.h_icon_1 === 'd02n' || props.h_icon_1 === 'd03d' || props.h_icon_1 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'r01d' || props.h_icon_1 === 'r01n' || props.h_icon_1 === 'r02d' || props.h_icon_1 === 'r02n' || props.h_icon_1 === 'r03d' || props.h_icon_1 === 'r03n' || props.h_icon_1 === 'f01d' || props.h_icon_1 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'r04d' || props.h_icon_1 === 'r05d' || props.h_icon_1 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'r04n' || props.h_icon_1 === 'r05n' || props.h_icon_1 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 's01d' || props.h_icon_1 === 's01n' || props.h_icon_1 === 's02d' || props.h_icon_1 === 's02n' || props.h_icon_1 === 's03d' || props.h_icon_1 === 's03n' || props.h_icon_1 === 's06d' || props.h_icon_1 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 's04d' || props.h_icon_1 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 's05d' || props.h_icon_1 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'a01d' || props.h_icon_1 === 'a02d' || props.h_icon_1 === 'a03d' || props.h_icon_1 === 'a04d' || props.h_icon_1 === 'a05d' || props.h_icon_1 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'a01n' || props.h_icon_1 === 'a02n' || props.h_icon_1 === 'a03n' || props.h_icon_1 === 'a04n' || props.h_icon_1 === 'a05n' || props.h_icon_1 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_1 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'c03d' || props.h_icon_1 === 'c03n' || props.h_icon_1 === 'c04d' || props.h_icon_1 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_1 === 'u00d' || props.h_icon_1 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_1 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_1)} °C</span></p>
        }
        {
            props.h_realFeel_1 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_1)} °C</span></p>
        }
        {
            props.h_hour_2 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_2).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_2 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_2).format('ddd')}</span></p>
        }
        {
            props.h_icon_2 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 't01d' || props.h_icon_2 === 't01n' || props.h_icon_2 === 't02d' || props.h_icon_2 === 't02n' || props.h_icon_2 === 't03d' || props.h_icon_2 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'd01d' || props.h_icon_2 === 'd01n' || props.h_icon_2 === 'd02d' || props.h_icon_2 === 'd02n' || props.h_icon_2 === 'd03d' || props.h_icon_2 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'r01d' || props.h_icon_2 === 'r01n' || props.h_icon_2 === 'r02d' || props.h_icon_2 === 'r02n' || props.h_icon_2 === 'r03d' || props.h_icon_2 === 'r03n' || props.h_icon_2 === 'f01d' || props.h_icon_2 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'r04d' || props.h_icon_2 === 'r05d' || props.h_icon_2 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'r04n' || props.h_icon_2 === 'r05n' || props.h_icon_2 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 's01d' || props.h_icon_2 === 's01n' || props.h_icon_2 === 's02d' || props.h_icon_2 === 's02n' || props.h_icon_2 === 's03d' || props.h_icon_2 === 's03n' || props.h_icon_2 === 's06d' || props.h_icon_2 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 's04d' || props.h_icon_2 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 's05d' || props.h_icon_2 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'a01d' || props.h_icon_2 === 'a02d' || props.h_icon_2 === 'a03d' || props.h_icon_2 === 'a04d' || props.h_icon_2 === 'a05d' || props.h_icon_2 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'a01n' || props.h_icon_2 === 'a02n' || props.h_icon_2 === 'a03n' || props.h_icon_2 === 'a04n' || props.h_icon_2 === 'a05n' || props.h_icon_2 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_2 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'c03d' || props.h_icon_2 === 'c03n' || props.h_icon_2 === 'c04d' || props.h_icon_2 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_2 === 'u00d' || props.h_icon_2 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_2 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_2)} °C</span></p>
        }
        {
            props.h_realFeel_2 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_2)} °C</span></p>
        }
        {
            props.h_hour_3 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_3).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_3 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_3).format('ddd')}</span></p>
        }
        {
            props.h_icon_3 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 't01d' || props.h_icon_3 === 't01n' || props.h_icon_3 === 't02d' || props.h_icon_3 === 't02n' || props.h_icon_3 === 't03d' || props.h_icon_3 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'd01d' || props.h_icon_3 === 'd01n' || props.h_icon_3 === 'd02d' || props.h_icon_3 === 'd02n' || props.h_icon_3 === 'd03d' || props.h_icon_3 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'r01d' || props.h_icon_3 === 'r01n' || props.h_icon_3 === 'r02d' || props.h_icon_3 === 'r02n' || props.h_icon_3 === 'r03d' || props.h_icon_3 === 'r03n' || props.h_icon_3 === 'f01d' || props.h_icon_3 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'r04d' || props.h_icon_3 === 'r05d' || props.h_icon_3 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'r04n' || props.h_icon_3 === 'r05n' || props.h_icon_3 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 's01d' || props.h_icon_3 === 's01n' || props.h_icon_3 === 's02d' || props.h_icon_3 === 's02n' || props.h_icon_3 === 's03d' || props.h_icon_3 === 's03n' || props.h_icon_3 === 's06d' || props.h_icon_3 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 's04d' || props.h_icon_3 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 's05d' || props.h_icon_3 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'a01d' || props.h_icon_3 === 'a02d' || props.h_icon_3 === 'a03d' || props.h_icon_3 === 'a04d' || props.h_icon_3 === 'a05d' || props.h_icon_3 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'a01n' || props.h_icon_3 === 'a02n' || props.h_icon_3 === 'a03n' || props.h_icon_3 === 'a04n' || props.h_icon_3 === 'a05n' || props.h_icon_3 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_3 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'c03d' || props.h_icon_3 === 'c03n' || props.h_icon_3 === 'c04d' || props.h_icon_3 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_3 === 'u00d' || props.h_icon_3 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_3 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_3)} °C</span></p>
        }
        {
            props.h_realFeel_3 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_3)} °C</span></p>
        }
        {
            props.h_hour_4 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_4).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_4 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_4).format('ddd')}</span></p>
        }
        {
            props.h_icon_4 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 't01d' || props.h_icon_4 === 't01n' || props.h_icon_4 === 't02d' || props.h_icon_4 === 't02n' || props.h_icon_4 === 't03d' || props.h_icon_4 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'd01d' || props.h_icon_4 === 'd01n' || props.h_icon_4 === 'd02d' || props.h_icon_4 === 'd02n' || props.h_icon_4 === 'd03d' || props.h_icon_4 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'r01d' || props.h_icon_4 === 'r01n' || props.h_icon_4 === 'r02d' || props.h_icon_4 === 'r02n' || props.h_icon_4 === 'r03d' || props.h_icon_4 === 'r03n' || props.h_icon_4 === 'f01d' || props.h_icon_4 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'r04d' || props.h_icon_4 === 'r05d' || props.h_icon_4 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'r04n' || props.h_icon_4 === 'r05n' || props.h_icon_4 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 's01d' || props.h_icon_4 === 's01n' || props.h_icon_4 === 's02d' || props.h_icon_4 === 's02n' || props.h_icon_4 === 's03d' || props.h_icon_4 === 's03n' || props.h_icon_4 === 's06d' || props.h_icon_4 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 's04d' || props.h_icon_4 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 's05d' || props.h_icon_4 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'a01d' || props.h_icon_4 === 'a02d' || props.h_icon_4 === 'a03d' || props.h_icon_4 === 'a04d' || props.h_icon_4 === 'a05d' || props.h_icon_4 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'a01n' || props.h_icon_4 === 'a02n' || props.h_icon_4 === 'a03n' || props.h_icon_4 === 'a04n' || props.h_icon_4 === 'a05n' || props.h_icon_4 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_4 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'c03d' || props.h_icon_4 === 'c03n' || props.h_icon_4 === 'c04d' || props.h_icon_4 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_4 === 'u00d' || props.h_icon_4 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_4 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_4)} °C</span></p>
        }
        {
            props.h_realFeel_4 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_4)} °C</span></p>
        }
        {
            props.h_hour_5 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_5).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_5 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_5).format('ddd')}</span></p>
        }
        {
            props.h_icon_5 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 't01d' || props.h_icon_5 === 't01n' || props.h_icon_5 === 't02d' || props.h_icon_5 === 't02n' || props.h_icon_5 === 't03d' || props.h_icon_5 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'd01d' || props.h_icon_5 === 'd01n' || props.h_icon_5 === 'd02d' || props.h_icon_5 === 'd02n' || props.h_icon_5 === 'd03d' || props.h_icon_5 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'r01d' || props.h_icon_5 === 'r01n' || props.h_icon_5 === 'r02d' || props.h_icon_5 === 'r02n' || props.h_icon_5 === 'r03d' || props.h_icon_5 === 'r03n' || props.h_icon_5 === 'f01d' || props.h_icon_5 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'r04d' || props.h_icon_5 === 'r05d' || props.h_icon_5 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'r04n' || props.h_icon_5 === 'r05n' || props.h_icon_5 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 's01d' || props.h_icon_5 === 's01n' || props.h_icon_5 === 's02d' || props.h_icon_5 === 's02n' || props.h_icon_5 === 's03d' || props.h_icon_5 === 's03n' || props.h_icon_5 === 's06d' || props.h_icon_5 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 's04d' || props.h_icon_5 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 's05d' || props.h_icon_5 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'a01d' || props.h_icon_5 === 'a02d' || props.h_icon_5 === 'a03d' || props.h_icon_5 === 'a04d' || props.h_icon_5 === 'a05d' || props.h_icon_5 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'a01n' || props.h_icon_5 === 'a02n' || props.h_icon_5 === 'a03n' || props.h_icon_5 === 'a04n' || props.h_icon_5 === 'a05n' || props.h_icon_5 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_5 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'c03d' || props.h_icon_5 === 'c03n' || props.h_icon_5 === 'c04d' || props.h_icon_5 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_5 === 'u00d' || props.h_icon_5 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_5 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_5)} °C</span></p>
        }
        {
            props.h_realFeel_5 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_5)} °C</span></p>
        }
        {
            props.h_hour_6 &&
            <p className="hourly-detail"><span className="hour">{moment(props.h_hour_6).format('HH:mm')}</span></p>
        }
        {
            props.h_hour_6 &&
            <p className="hourly-detail"><span>{moment(props.h_hour_6).format('ddd')}</span></p>
        }
        {
            props.h_icon_6 != null &&
            <div className="h-weather-icon-div">
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 't01d' || props.h_icon_6 === 't01n' || props.h_icon_6 === 't02d' || props.h_icon_6 === 't02n' || props.h_icon_6 === 't03d' || props.h_icon_6 === 't03n') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 't04n' &&
                        <img alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 't05n' &&
                        <img alt="icon" src={hailNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'd01d' || props.h_icon_6 === 'd01n' || props.h_icon_6 === 'd02d' || props.h_icon_6 === 'd02n' || props.h_icon_6 === 'd03d' || props.h_icon_6 === 'd03n') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'r01d' || props.h_icon_6 === 'r01n' || props.h_icon_6 === 'r02d' || props.h_icon_6 === 'r02n' || props.h_icon_6 === 'r03d' || props.h_icon_6 === 'r03n' || props.h_icon_6 === 'f01d' || props.h_icon_6 === 'f01n') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'r04d' || props.h_icon_6 === 'r05d' || props.h_icon_6 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'r04n' || props.h_icon_6 === 'r05n' || props.h_icon_6 === 'r06n') &&
                        <img alt="icon" src={showerRainNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 's01d' || props.h_icon_6 === 's01n' || props.h_icon_6 === 's02d' || props.h_icon_6 === 's02n' || props.h_icon_6 === 's03d' || props.h_icon_6 === 's03n' || props.h_icon_6 === 's06d' || props.h_icon_6 === 's06n') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 's04d' || props.h_icon_6 === 's04n') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 's05d' || props.h_icon_6 === 's045n') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'a01d' || props.h_icon_6 === 'a02d' || props.h_icon_6 === 'a03d' || props.h_icon_6 === 'a04d' || props.h_icon_6 === 'a05d' || props.h_icon_6 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'a01n' || props.h_icon_6 === 'a02n' || props.h_icon_6 === 'a03n' || props.h_icon_6 === 'a04n' || props.h_icon_6 === 'a05n' || props.h_icon_6 === 'a06n') &&
                        <img alt="icon" src={fogNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 'c01n' &&
                        <img alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        props.h_icon_6 === 'c02n' &&
                        <img alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'c03d' || props.h_icon_6 === 'c03n' || props.h_icon_6 === 'c04d' || props.h_icon_6 === 'c04n') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="h-weather-icon">
                    {
                        (props.h_icon_6 === 'u00d' || props.h_icon_6 === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.h_temp_6 &&
            <p className="hourly-detail"><span>{Math.round(props.h_temp_6)} °C</span></p>
        }
        {
            props.h_realFeel_6 &&
            <p className="hourly-detail"><span className="h-real-feel">{Math.round(props.h_realFeel_6)} °C</span></p>
        }


    </div>

);

export default HourlyWeather;