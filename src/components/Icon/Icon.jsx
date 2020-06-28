import React from 'react';

import thunderstormRain from '../../assets/icons/thunderstorm-rain.png';
import thunderstormDrizzleDay from '../../assets/icons/thunderstorm-drizzle-d.png';
import thunderstormDrizzleNight from '../../assets/icons/thunderstorm-drizzle-n.png';
import hailDay from '../../assets/icons/hail-d.png';
import hailNight from '../../assets/icons/hail-n.png';
import drizzle from '../../assets/icons/drizzle.png';
import rain from '../../assets/icons/rain.png';
import showerRainDay from '../../assets/icons/shower-rain-d.png';
import showerRainNight from '../../assets/icons/shower-rain-n.png';
import snow from '../../assets/icons/snow.png';
import rainSnow from '../../assets/icons/rain-snow.png';
import sleet from '../../assets/icons/sleet.png';
import fogDay from '../../assets/icons/fog-d.png';
import fogNight from '../../assets/icons/fog-n.png';
import clearSkyDay from '../../assets/icons/clear-sky-d.png';
import clearSkyNight from '../../assets/icons/clear-sky-n.png';
import fewCloudsDay from '../../assets/icons/few-clouds-d.png';
import fewCloudsNight from '../../assets/icons/few-clouds-n.png';
import clouds from '../../assets/icons/clouds.png';
import unknown from '../../assets/icons/unknown.png';

const Icon = props => {
    return (
        <div className="current-weather-icon-wrapper">
            {
                props.icon != null &&
                <div>
                    {
                        (props.icon === 't01d' || props.icon === 't01n' || props.icon === 't02d' || props.icon === 't02n' || props.icon === 't03d' || props.icon === 't03n') &&
                        <img alt="Thunderstorm with rain" src={thunderstormRain} />
                    }
                    {
                        props.icon === 't04d' &&
                        <img alt="Thunderstorm with drizzle" src={thunderstormDrizzleDay} />
                    }
                    {
                        props.icon === 't04n' &&
                        <img alt="Thunderstorm with drizzle" src={thunderstormDrizzleNight} />
                    }
                    {
                        props.icon === 't05d' &&
                        <img alt="Hail" src={hailDay} />
                    }
                    {
                        props.icon === 't05n' &&
                        <img alt="Hail" src={hailNight} />
                    }
                    {
                        (props.icon === 'd01d' || props.icon === 'd01n' || props.icon === 'd02d' || props.icon === 'd02n' || props.icon === 'd03d' || props.icon === 'd03n') &&
                        <img alt="Drizzle" src={drizzle} />
                    }
                    {
                        (props.icon === 'r01d' || props.icon === 'r01n' || props.icon === 'r02d' || props.icon === 'r02n' || props.icon === 'r03d' || props.icon === 'r03n' || props.icon === 'f01d' || props.icon === 'f01n') &&
                        <img alt="Rain" src={rain} />
                    }
                    {
                        (props.icon === 'r04d' || props.icon === 'r05d' || props.icon === 'r06d') &&
                        <img alt="Shower rain" src={showerRainDay} />
                    }
                    {
                        (props.icon === 'r04n' || props.icon === 'r05n' || props.icon === 'r06n') &&
                        <img alt="Shower rain" src={showerRainNight} />
                    }
                    {
                        (props.icon === 's01d' || props.icon === 's01n' || props.icon === 's02d' || props.icon === 's02n' || props.icon === 's03d' || props.icon === 's03n' || props.icon === 's06d' || props.icon === 's06n') &&
                        <img alt="Snow" src={snow} />
                    }
                    {
                        (props.icon === 's04d' || props.icon === 's04n') &&
                        <img alt="Rain and snow" src={rainSnow} />
                    }
                    {
                        (props.icon === 's05d' || props.icon === 's045n') &&
                        <img alt="Sleet" src={sleet} />
                    }
                    {
                        (props.icon === 'a01d' || props.icon === 'a02d' || props.icon === 'a03d' || props.icon === 'a04d' || props.icon === 'a05d' || props.icon === 'a06d') &&
                        <img alt="Fog" src={fogDay} />
                    }
                    {
                        (props.icon === 'a01n' || props.icon === 'a02n' || props.icon === 'a03n' || props.icon === 'a04n' || props.icon === 'a05n' || props.icon === 'a06n') &&
                        <img alt="Fog" src={fogNight} />
                    }
                    {
                        props.icon === 'c01d' &&
                        <img alt="Clear sky" src={clearSkyDay} />
                    }
                    {
                        props.icon === 'c01n' &&
                        <img alt="Clear sky" src={clearSkyNight} />
                    }
                    {
                        props.icon === 'c02d' &&
                        <img alt="Few clouds" src={fewCloudsDay} />
                    }
                    {
                        props.icon === 'c02n' &&
                        <img alt="Few clouds" src={fewCloudsNight} />
                    }
                    {
                        (props.icon === 'c03d' || props.icon === 'c03n' || props.icon === 'c04d' || props.icon === 'c04n') &&
                        <img alt="Clouds" src={clouds} />
                    }
                    {
                        (props.icon === 'u00d' || props.icon === 'u00n') &&
                        <img alt="icon" src={unknown} />
                    }
                </div>
            }
        </div>
    );
}

export default Icon;