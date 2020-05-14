import React from "react";
import './Weather.css';
import Icon from '../Icon/Icon';
import RoundProgressBar from '../RoundProgressBar/RoundProgressBar';

import windSpeedIcon from "../../assets/detail-icons/windspeed.png";
import humidityIcon from "../../assets/detail-icons/humidity.png";
import pressureIcon from "../../assets/detail-icons/pressure.png";
import uvIcon from "../../assets/detail-icons/uv.png";
import partOfDayIcon from "../../assets/detail-icons/pod.png";
import windDirIcon from "../../assets/detail-icons/winddir.png";
import dewPointIcon from "../../assets/detail-icons/dewpoint.png";
import cloudCoverageIcon from "../../assets/detail-icons/cloudcoverage.png";
import visibilityIcon from "../../assets/detail-icons/visibility.png";
import solarRadIcon from "../../assets/detail-icons/solarrad.png";
import precipIcon from "../../assets/detail-icons/precip.png";
import snowfallIcon from "../../assets/detail-icons/snowfall.png";
import sunriseIcon from "../../assets/detail-icons/sunrise.png";
import sunsetIcon from "../../assets/detail-icons/sunset.png";

const Weather = props => {
    return (
        <div id="weather-air-wrapper" className="container">
            {/* WEATHER BASIC INFO */}
            {props.icon != null && props.city != null && props.temperature != null && props.realFeel != null && props.description != null &&
                <div id="weather-basic">
                    {
                        <div className="current-weather-icon-div">
                            <span className="current-weather-icon"><Icon icon={props.icon} /></span>
                        </div>
                    }
                    <div id="city-temp-rf">
                        {
                            <p className="current-weather-basic">
                                <span className="current-city">{props.city}</span>
                            </p>
                        }
                        {
                            <p className="current-weather-basic">
                                <span className="current-temp">{Math.round(props.temperature)}° C</span>
                            </p>
                        }
                        {
                            <p className="current-weather-basic">
                                <span className="real-feel-temp">Real feel: {Math.round(props.realFeel)}° C</span>
                            </p>
                        }
                    </div>
                    {
                        <p className="current-weather-basic">
                            <span className="current-weather-descritpion">{props.description}</span>
                        </p>
                    }
                </div>
            }
            <div id="air-weather-deatail">
                {/* AIR QUALITY */}
                {props.aqi &&
                    <div id="air-quality">
                        <div id="circle-div">
                            <RoundProgressBar
                                value={props.aqi}
                                stroke={props.aqi <= 50 ? '#73bc8d' : props.aqi > 50 && props.aqi <= 100 ? '#F0E68C' : props.aqi > 100 ? '#CD5C5C' : '#fff'}
                                max={props.aqi > 100 ? props.aqi : 100}
                                text={props.aqi <= 50 ? 'Good AQI' : props.aqi > 50 && props.aqi <= 100 ? 'Moderate AQI' : props.aqi > 100 ? 'Poor AQI' : 'N/A'}
                            />
                        </div>
                    </div>
                }
                {/* WEATHER DETAIL INFO 1*/}
                {props.windSpeed != null && props.humidity != null && props.pressure != null && props.uv != null &&
                    <div id="detail-div-1">
                        {
                            <p className="current-weather-detail">
                                <span className="detail-icon"><img alt="icon" src={windSpeedIcon}></img></span>
                                <span className="detail-txt">Wind speed: </span>
                                <span className="detail-data">{Math.round(props.windSpeed)} m/s</span>
                            </p>
                        }
                        {
                            <p className="current-weather-detail">
                                <span className="detail-icon"><img alt="icon" src={humidityIcon}></img></span>
                                <span className="detail-txt">Humidity: </span>
                                <span className="detail-data">{props.humidity}%</span>
                            </p>
                        }
                        {
                            <p className="current-weather-detail">
                                <span className="detail-icon"><img alt="icon" src={pressureIcon}></img></span>
                                <span className="detail-txt">Pressure: </span>
                                <span className="detail-data">{Math.round(props.pressure)} mb</span>
                            </p>
                        }
                        {
                            <p className="current-weather-detail">
                                <span className="detail-icon"><img alt="icon" src={uvIcon}></img></span>
                                <span className="detail-txt">UV Index: </span>
                                <span className="detail-data">{Math.round(props.uv)} </span>
                                <span className="detail-data">{props.uv === 0 && '(None)'}</span>
                                <span className="detail-data">{props.uv > 0 && props.uv <= 2 && '(Low)'}</span>
                                <span className="detail-data">{props.uv > 2 && props.uv <= 5 && '(Medium)'}</span>
                                <span className="detail-data">{props.uv > 5 && props.uv <= 7 && '(High)'}</span>
                                <span className="detail-data">{props.uv > 7 && props.uv <= 10 && '(Very High)'}</span>
                                <span className="detail-data">{props.uv > 10 && '(Extreme)'}</span>
                            </p>
                        }
                    </div>
                }
            </div>
            {/* WEATHER DETAIL INFO 2*/}
            {props.partOfDay != null &&
                props.windDirectionTxt != null &&
                props.windDirectionDeg != null && props.dewPoint != null &&
                props.clouds != null &&
                props.visibility != null &&
                props.solarRadiation != null &&
                props.rain != null &&
                props.snow != null &&
                props.sunrise != null &&
                props.sunset != null &&
                <div id="detail-div-2">
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={partOfDayIcon}></img></span>
                            <span className="detail-txt">Part of day: </span>
                            <span className="detail-data">{props.partOfDay === 'd' ? 'Day' : 'Night'}</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={windDirIcon}></img></span>
                            <span className="detail-txt">Wind direction: </span>
                            <span className="detail-data">{props.windDirectionTxt}, {Math.round(props.windDirectionDeg)}°</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={dewPointIcon}></img></span>
                            <span className="detail-txt">Dew point: </span>
                            <span className="detail-data">{Math.round(props.dewPoint)}° C</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={cloudCoverageIcon}></img></span>
                            <span className="detail-txt">Cloud coverage: </span>
                            <span className="detail-data">{props.clouds}%</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={visibilityIcon}></img></span>
                            <span className="detail-txt">Visibility: </span>
                            <span className="detail-data">{Math.round(props.visibility)} km</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={solarRadIcon}></img></span>
                            <span className="detail-txt">Solar radiation: </span>
                            <span className="detail-data">{Math.round(props.solarRadiation)} W/m²</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={precipIcon}></img></span>
                            <span className="detail-txt">Rain: </span>
                            <span className="detail-data">{Math.round(props.rain)} mm/hr</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={snowfallIcon}></img></span>
                            <span className="detail-txt">Snow: </span>
                            <span className="detail-data">{Math.round(props.snow)} mm/hr</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={sunriseIcon}></img></span>
                            <span className="detail-txt">Sunrise: </span>
                            <span className="detail-data">{props.sunrise}</span>
                        </p>
                    }
                    {
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={sunsetIcon}></img></span>
                            <span className="detail-txt">Sunset: </span>
                            <span className="detail-data">{props.sunset}</span>
                        </p>
                    }
                </div>
            }
            {/* ERROR MESSAGE */}
            {
                props.error && <p>{props.error}</p>
            }
        </div>
    );
}

export default Weather;