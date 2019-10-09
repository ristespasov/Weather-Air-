import React from 'react';
import moment from 'moment';
import './DailyWeather.css';
import thunderstormRain from '../../icons/thunderstorm-rain.png';
import thunderstormDrizzleDay from '../../icons/thunderstorm-drizzle-d.png';
import hailDay from '../../icons/hail-d.png';
import drizzle from '../../icons/drizzle.png';
import rain from '../../icons/rain.png';
import showerRainDay from '../../icons/shower-rain-d.png';
import snow from '../../icons/snow.png';
import rainSnow from '../../icons/rain-snow.png';
import sleet from '../../icons/sleet.png';
import fogDay from '../../icons/fog-d.png';
import clearSkyDay from '../../icons/clear-sky-d.png';
import fewCloudsDay from '../../icons/few-clouds-d.png';
import clouds from '../../icons/clouds.png';
import unknown from '../../icons/unknown.png';

const DailyWeather = props => (

    <div>
        {
            props.d_day_1 &&
            <p className="daily-detail"><span className="day">{moment(props.d_day_1).format('ddd')}</span></p>
        }
        {
            props.d_icon_1 != null &&
            <div className="d-weather-icon-div">
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 't01d' || props.d_icon_1 === 't02d' || props.d_icon_1 === 't03d') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_1 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_1 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'd01d' || props.d_icon_1 === 'd02d' || props.d_icon_1 === 'd03d') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'r01d' || props.d_icon_1 === 'r02d' || props.d_icon_1 === 'r03d' || props.d_icon_1 === 'f01d') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'r04d' || props.d_icon_1 === 'r05d' || props.d_icon_1 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.h_icon_1 === 's01d' || props.d_icon_1 === 's02d' || props.d_icon_1 === 's03d' || props.d_icon_1 === 's06d') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 's04d') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 's05d') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'a01d' || props.d_icon_1 === 'a02d' || props.d_icon_1 === 'a03d' || props.d_icon_1 === 'a04d' || props.d_icon_1 === 'a05d' || props.d_icon_1 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_1 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_1 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'c03d' || props.d_icon_1 === 'c04d') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_1 === 'u00d') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.d_max_temp_1 &&
            <p className="daily-detail"><span className="d-max-temp">{Math.round(props.d_max_temp_1)} °C</span></p>
        }
        {
            props.d_min_temp_1 &&
            <p className="daily-detail"><span className="d-min-temp">{Math.round(props.d_min_temp_1)} °C</span></p>
        }

        {
            props.d_day_2 &&
            <p className="daily-detail"><span className="day">{moment(props.d_day_2).format('ddd')}</span></p>
        }
        {
            props.d_icon_2 != null &&
            <div className="d-weather-icon-div">
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 't01d' || props.d_icon_2 === 't02d' || props.d_icon_2 === 't03d') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_2 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_2 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'd01d' || props.d_icon_2 === 'd02d' || props.d_icon_2 === 'd03d') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'r01d' || props.d_icon_2 === 'r02d' || props.d_icon_2 === 'r03d' || props.d_icon_2 === 'f01d') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'r04d' || props.d_icon_2 === 'r05d' || props.d_icon_2 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.h_icon_2 === 's01d' || props.d_icon_2 === 's02d' || props.d_icon_2 === 's03d' || props.d_icon_2 === 's06d') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 's04d') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 's05d') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'a01d' || props.d_icon_2 === 'a02d' || props.d_icon_2 === 'a03d' || props.d_icon_2 === 'a04d' || props.d_icon_2 === 'a05d' || props.d_icon_2 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_2 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_2 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'c03d' || props.d_icon_2 === 'c04d') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_2 === 'u00d') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.d_max_temp_2 &&
            <p className="daily-detail"><span className="d-max-temp">{Math.round(props.d_max_temp_2)} °C</span></p>
        }
        {
            props.d_min_temp_2 &&
            <p className="daily-detail"><span className="d-min-temp">{Math.round(props.d_min_temp_2)} °C</span></p>
        }

        {
            props.d_day_3 &&
            <p className="daily-detail"><span className="day">{moment(props.d_day_3).format('ddd')}</span></p>
        }
        {
            props.d_icon_3 != null &&
            <div className="d-weather-icon-div">
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 't01d' || props.d_icon_3 === 't02d' || props.d_icon_3 === 't03d') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_3 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_3 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'd01d' || props.d_icon_3 === 'd02d' || props.d_icon_3 === 'd03d') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'r01d' || props.d_icon_3 === 'r02d' || props.d_icon_3 === 'r03d' || props.d_icon_3 === 'f01d') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'r04d' || props.d_icon_3 === 'r05d' || props.d_icon_3 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.h_icon_3 === 's01d' || props.d_icon_3 === 's02d' || props.d_icon_3 === 's03d' || props.d_icon_3 === 's06d') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 's04d') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 's05d') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'a01d' || props.d_icon_3 === 'a02d' || props.d_icon_3 === 'a03d' || props.d_icon_3 === 'a04d' || props.d_icon_3 === 'a05d' || props.d_icon_3 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_3 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_3 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'c03d' || props.d_icon_3 === 'c04d') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_3 === 'u00d') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.d_max_temp_3 &&
            <p className="daily-detail"><span className="d-max-temp">{Math.round(props.d_max_temp_3)} °C</span></p>
        }
        {
            props.d_min_temp_3 &&
            <p className="daily-detail"><span className="d-min-temp">{Math.round(props.d_min_temp_3)} °C</span></p>
        }

        {
            props.d_day_4 &&
            <p className="daily-detail"><span className="day">{moment(props.d_day_4).format('ddd')}</span></p>
        }
        {
            props.d_icon_4 != null &&
            <div className="daily-detail d-weather-icon-div">
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 't01d' || props.d_icon_4 === 't02d' || props.d_icon_4 === 't03d') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_4 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_4 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'd01d' || props.d_icon_4 === 'd02d' || props.d_icon_4 === 'd03d') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'r01d' || props.d_icon_4 === 'r02d' || props.d_icon_4 === 'r03d' || props.d_icon_4 === 'f01d') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'r04d' || props.d_icon_4 === 'r05d' || props.d_icon_4 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.h_icon_4 === 's01d' || props.d_icon_4 === 's02d' || props.d_icon_4 === 's03d' || props.d_icon_4 === 's06d') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 's04d') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 's05d') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'a01d' || props.d_icon_4 === 'a02d' || props.d_icon_4 === 'a03d' || props.d_icon_4 === 'a04d' || props.d_icon_4 === 'a05d' || props.d_icon_4 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_4 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_4 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'c03d' || props.d_icon_4 === 'c04d') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_4 === 'u00d') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.d_max_temp_4 &&
            <p className="daily-detail"><span className="d-max-temp">{Math.round(props.d_max_temp_4)} °C</span></p>
        }
        {
            props.d_min_temp_4 &&
            <p className="daily-detail"><span className="d-min-temp">{Math.round(props.d_min_temp_4)} °C</span></p>
        }

        {
            props.d_day_5 &&
            <p className="daily-detail"><span className="day">{moment(props.d_day_5).format('ddd')}</span></p>
        }
        {
            props.d_icon_5 != null &&
            <div className="d-weather-icon-div">
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 't01d' || props.d_icon_5 === 't02d' || props.d_icon_5 === 't03d') &&
                        <img alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_5 === 't04d' &&
                        <img alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_5 === 't05d' &&
                        <img alt="icon" src={hailDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'd01d' || props.d_icon_5 === 'd02d' || props.d_icon_5 === 'd03d') &&
                        <img alt="icon" src={drizzle} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'r01d' || props.d_icon_5 === 'r02d' || props.d_icon_5 === 'r03d' || props.d_icon_5 === 'f01d') &&
                        <img alt="icon" src={rain} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'r04d' || props.d_icon_5 === 'r05d' || props.d_icon_5 === 'r06d') &&
                        <img alt="icon" src={showerRainDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.h_icon_5 === 's01d' || props.d_icon_5 === 's02d' || props.d_icon_5 === 's03d' || props.d_icon_5 === 's06d') &&
                        <img alt="icon" src={snow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 's04d') &&
                        <img alt="icon" src={rainSnow} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 's05d') &&
                        <img alt="icon" src={sleet} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'a01d' || props.d_icon_5 === 'a02d' || props.d_icon_5 === 'a03d' || props.d_icon_5 === 'a04d' || props.d_icon_5 === 'a05d' || props.d_icon_5 === 'a06d') &&
                        <img alt="icon" src={fogDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_5 === 'c01d' &&
                        <img alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        props.d_icon_5 === 'c02d' &&
                        <img alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'c03d' || props.d_icon_5 === 'c04d') &&
                        <img alt="icon" src={clouds} />
                    }
                </span>
                <span className="d-weather-icon">
                    {
                        (props.d_icon_5 === 'u00d') &&
                        <img alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
        {
            props.d_max_temp_5 &&
            <p className="daily-detail"><span className="d-max-temp">{Math.round(props.d_max_temp_5)} °C</span></p>
        }
        {
            props.d_min_temp_5 &&
            <p className="daily-detail"><span className="d-min-temp">{Math.round(props.d_min_temp_5)} °C</span></p>
        }
    </div>
);

export default DailyWeather;