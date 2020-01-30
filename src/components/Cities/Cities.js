import React from 'react';
import './Cities.css';
import Icon from '../Icon/Icon';
import aqiIcon from '../../detail-icons/aqi.png'
import humidityIcon from '../../detail-icons/humidity.png';
import uvIcon from '../../detail-icons/uv.png';

const Cities = (props) => {
    return (
        <div id="parrent">
            {props.getCitiesWeather &&
                <div id="wrapper">
                    {
                        props.city != null &&
                        <div id="cities-name">{props.city}</div>
                    }
                    <div id="first-div" className="d-inline-block">
                        {
                            props.icon != null &&
                            <div id="cities-weather-icon"><Icon icon={props.icon} /></div>
                        }
                        {
                            props.description != null &&
                            <div id="cities-weather-description">{props.description}</div>
                        }
                    </div>
                    <div id="second-div" className="d-inline-block">
                        {
                            props.temperature != null &&
                            <span id="cities-temp" className="d-block">{Math.round(props.temperature)}° C</span>
                        }
                        {
                            props.realFeel != null &&
                            <span id="cities-rf-temp" className="d-block">Real feel: {Math.round(props.realFeel)}° C</span>
                        }
                    </div>
                    <div id="third-div" className="d-inline-block">
                        {
                            props.aqi != null &&
                            <div>
                                <span className="cities-detail-icon"><img alt="icon" src={aqiIcon} /></span>
                                <span className="cities-detail-data">{Math.round(props.aqi)}</span>
                            </div>
                        }
                        {
                            props.humidity != null &&
                            <div>
                                <span className="cities-detail-icon"><img alt="icon" src={humidityIcon} /></span>
                                <span className="cities-detail-data">{props.humidity}%</span>
                            </div>
                        }
                        {
                            props.uv != null &&
                            <div>
                                <span className="cities-detail-icon"><img alt="icon" src={uvIcon} /></span>
                                <span className="cities-detail-data">{Math.round(props.uv)}</span>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Cities;