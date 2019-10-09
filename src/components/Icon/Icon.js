import React from 'react';
import './Icon.css';
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

const Icon = props => (
    <div id="current-weather-icon-div">
        {
            props.icon != null &&
            <div>
                <span>
                    {
                        (props.icon === 't01d' || props.icon === 't01n' || props.icon === 't02d' || props.icon === 't02n' || props.icon === 't03d' || props.icon === 't03n') &&
                        <img className="current-weather-icon" alt="icon" src={thunderstormRain} />
                    }
                </span>
                <span>
                    {
                        props.icon === 't04d' &&
                        <img className="current-weather-icon" alt="icon" src={thunderstormDrizzleDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === 't04n' &&
                        <img className="current-weather-icon" alt="icon" src={thunderstormDrizzleNight} />
                    }
                </span>
                <span>
                    {
                        props.icon === 't05d' &&
                        <img className="current-weather-icon" alt="icon" src={hailDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === 't05n' &&
                        <img className="current-weather-icon" alt="icon" src={hailNight} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'd01d' || props.icon === 'd01n' || props.icon === 'd02d' || props.icon === 'd02n' || props.icon === 'd03d' || props.icon === 'd03n') &&
                        <img className="current-weather-icon" alt="icon" src={drizzle} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'r01d' || props.icon === 'r01n' || props.icon === 'r02d' || props.icon === 'r02n' || props.icon === 'r03d' || props.icon === 'r03n' || props.icon === 'f01d' || props.icon === 'f01n') &&
                        <img className="current-weather-icon" alt="icon" src={rain} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'r04d' || props.icon === 'r05d' || props.icon === 'r06d') &&
                        <img className="current-weather-icon" alt="icon" src={showerRainDay} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'r04n' || props.icon === 'r05n' || props.icon === 'r06n') &&
                        <img className="current-weather-icon" alt="icon" src={showerRainNight} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 's01d' || props.icon === 's01n' || props.icon === 's02d' || props.icon === 's02n' || props.icon === 's03d' || props.icon === 's03n' || props.icon === 's06d' || props.icon === 's06n') &&
                        <img className="current-weather-icon" alt="icon" src={snow} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 's04d' || props.icon === 's04n') &&
                        <img className="current-weather-icon" alt="icon" src={rainSnow} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 's05d' || props.icon === 's045n') &&
                        <img className="current-weather-icon" alt="icon" src={sleet} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'a01d' || props.icon === 'a02d' || props.icon === 'a03d' || props.icon === 'a04d' || props.icon === 'a05d' || props.icon === 'a06d') &&
                        <img className="current-weather-icon" alt="icon" src={fogDay} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'a01n' || props.icon === 'a02n' || props.icon === 'a03n' || props.icon === 'a04n' || props.icon === 'a05n' || props.icon === 'a06n') &&
                        <img className="current-weather-icon" alt="icon" src={fogNight} />
                    }
                </span>
                <span>
                    {
                        props.icon === 'c01d' &&
                        <img className="current-weather-icon" alt="icon" src={clearSkyDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === 'c01n' &&
                        <img className="current-weather-icon" alt="icon" src={clearSkyNight} />
                    }
                </span>
                <span>
                    {
                        props.icon === 'c02d' &&
                        <img className="current-weather-icon" alt="icon" src={fewCloudsDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === 'c02n' &&
                        <img className="current-weather-icon" alt="icon" src={fewCloudsNight} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'c03d' || props.icon === 'c03n' || props.icon === 'c04d' || props.icon === 'c04n') &&
                        <img className="current-weather-icon" alt="icon" src={clouds} />
                    }
                </span>
                <span>
                    {
                        (props.icon === 'u00d' || props.icon === 'u00n') &&
                        <img className="current-weather-icon" alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
    </div>
)

export default Icon;