import React from 'react';
import thunderstormRain from '../icons/thunderstorm-rain.png';
import thunderstormDrizzleDay from '../icons/thunderstorm-drizzle-d.png';
import thunderstormDrizzleNight from '../icons/thunderstorm-drizzle-n.png';
import hailDay from '../icons/hail-d.png';
import hailNight from '../icons/hail-n.png';
import drizzle from '../icons/drizzle.png';
import rain from '../icons/rain.png';
import showerRainDay from '../icons/shower-rain-d.png';
import showerRainNight from '../icons/shower-rain-n.png';
import snow from '../icons/snow.png';
import rainSnow from '../icons/rain-snow.png';
import sleet from '../icons/sleet.png';
import fogDay from '../icons/fog-d.png';
import fogNight from '../icons/fog-n.png';
import clearSkyDay from '../icons/clear-sky-d.png';
import clearSkyNight from '../icons/clear-sky-n.png';
import fewCloudsDay from '../icons/few-clouds-d.png';
import fewCloudsNight from '../icons/few-clouds-n.png';
import clouds from '../icons/clouds.png';
import unknown from '../icons/unknown.png';

const Icon = props => (
    <div>
        {
            props.icon != null &&
            <div>
                <span>
                    {
                        props.icon === ('t01d' || 't01n' || 't02d' || 't02n' || 't03d' || 't03n') &&
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
                        props.icon === ('d01d' && 'd01n' && 'd02d' && 'd02n' && 'd03d' && 'd03n') &&
                        <img className="current-weather-icon" alt="icon" src={drizzle} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('r01d' && 'r01n' && 'r02d' && 'r02n' && 'r03d' && 'r03n' && 'f01d' && 'f01n' && 'r04d' && 'r04n') &&
                        <img className="current-weather-icon" alt="icon" src={rain} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('r04d' && 'r05d' && 'r06d') &&
                        <img className="current-weather-icon" alt="icon" src={showerRainDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('r04n' && 'r05n' && 'r06n') &&
                        <img className="current-weather-icon" alt="icon" src={showerRainNight} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('s01d' && 's01n' && 's02d' && 's02n' && 's03d' && 's03n' && 's06d' && 's06n') &&
                        <img className="current-weather-icon" alt="icon" src={snow} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('s04d' && 's04n') &&
                        <img className="current-weather-icon" alt="icon" src={rainSnow} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('s05d' && 's045n') &&
                        <img className="current-weather-icon" alt="icon" src={sleet} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('a01d' && 'a02d' && 'a03d' && 'a04d' && 'a05d' && 'a06d') &&
                        <img className="current-weather-icon" alt="icon" src={fogDay} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('a01n' && 'a02n' && 'a03n' && 'a04n' && 'a05n' && 'a06n') &&
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
                        props.icon === ('c03d' && 'c03n' && 'c04d' && 'c04n') &&
                        <img className="current-weather-icon" alt="icon" src={clouds} />
                    }
                </span>
                <span>
                    {
                        props.icon === ('u00d' || 'u00n') &&
                        <img className="current-weather-icon" alt="icon" src={unknown} />
                    }
                </span>
            </div>
        }
    </div>
)

// class Icon extends React.Component {



//     render() {
//         let icon;
//         return (
//             <div>
//                 {this.getIcon(icon)}
//             </div>
//         );
//     }
// }

export default Icon;