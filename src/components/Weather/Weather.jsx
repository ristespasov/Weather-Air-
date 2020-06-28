import React, { useContext } from "react";
import './Weather.css';

// COUNTUP
import CountUp from 'react-countup';

// COMPONENTS
import Icon from '../Icon/Icon';
import RoundProgressBar from '../RoundProgressBar/RoundProgressBar';

// CONTEXT
import Context from '../../Context/Context';

// ICONS
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

const Weather = () => {
    const { weather } = useContext(Context);
    const { icon, city, temperature, realFeel, weatherDescription, windSpeed, humidity, pressure, uv, partOfDay,
        windDirectionTxt, windDirectionDeg, dewPoint, clouds, visibility, solarRadiation, rain, snow, sunrise, sunset, aqi } = weather;

    return (
        <div>
            <div id="weather-air-wrapper" className="container">
                {/* WEATHER BASIC INFO */}
                <div id="weather-basic">
                    <div className="current-weather-icon-div">
                        <span className="current-weather-icon"><Icon icon={icon} /></span>
                    </div>
                    <div id="city-temp-rf">
                        <p className="current-weather-basic">
                            <span className="current-city">{city}</span>
                        </p>
                        <p className="current-weather-basic">
                            <span className="current-temp"><CountUp start={0} end={Math.round(temperature)} duration={3} />° C</span>
                        </p>
                        <p className="current-weather-basic">
                            <span className="real-feel-temp">Real feel: {Math.round(realFeel)}° C</span>
                        </p>
                    </div>
                    <p className="current-weather-basic">
                        <span className="current-weather-descritpion">{weatherDescription}</span>
                    </p>
                </div>
                <div id="air-weather-deatail">
                    {/* AIR QUALITY */}

                    <div id="air-quality">
                        <div id="circle-div">
                            <RoundProgressBar
                                value={aqi}
                                stroke={aqi <= 50 ? '#73bc8d' : aqi <= 100 ? '#e7d748' : aqi > 100 ? '#CD5C5C' : '#fff'}
                                max={aqi > 100 ? aqi : 100}
                                text={aqi <= 50 ? 'Good AQI' : aqi <= 100 ? 'Moderate AQI' : aqi > 100 ? 'Poor AQI' : 'N/A'}
                            />
                        </div>
                    </div>

                    {/* WEATHER DETAIL INFO 1*/}

                    <div id="detail-div-1">
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={windSpeedIcon}></img></span>
                            <span className="detail-txt">Wind speed: </span>
                            <span className="detail-data">{Math.round(windSpeed)} m/s</span>
                        </p>
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={humidityIcon}></img></span>
                            <span className="detail-txt">Humidity: </span>
                            <span className="detail-data">{humidity}%</span>
                        </p>
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={pressureIcon}></img></span>
                            <span className="detail-txt">Pressure: </span>
                            <span className="detail-data">{Math.round(pressure)} mb</span>
                        </p>
                        <p className="current-weather-detail">
                            <span className="detail-icon"><img alt="icon" src={uvIcon}></img></span>
                            <span className="detail-txt">UV Index: </span>
                            <span className="detail-data">{Math.round(uv)} </span>
                            <span className="detail-data">
                                {uv === 0 ? '(None)'
                                    : uv <= 2 ? '(Low)'
                                        : uv <= 5 ? '(Medium)'
                                            : uv <= 7 ? '(High)'
                                                : uv <= 10 ? '(Very High)'
                                                    : uv > 10 ? '(Extreme)'
                                                        : null}
                            </span>
                        </p>
                    </div>

                </div>
                {/* WEATHER DETAIL INFO 2*/}

                <div id="detail-div-2">
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={partOfDayIcon}></img></span>
                        <span className="detail-txt">Part of day: </span>
                        <span className="detail-data">{partOfDay === 'd' ? 'Day' : 'Night'}</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={windDirIcon}></img></span>
                        <span className="detail-txt">Wind direction: </span>
                        <span className="detail-data">{windDirectionTxt}, {Math.round(windDirectionDeg)}°</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={dewPointIcon}></img></span>
                        <span className="detail-txt">Dew point: </span>
                        <span className="detail-data">{Math.round(dewPoint)}° C</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={cloudCoverageIcon}></img></span>
                        <span className="detail-txt">Cloud coverage: </span>
                        <span className="detail-data">{clouds}%</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={visibilityIcon}></img></span>
                        <span className="detail-txt">Visibility: </span>
                        <span className="detail-data">{Math.round(visibility)} km</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={solarRadIcon}></img></span>
                        <span className="detail-txt">Solar radiation: </span>
                        <span className="detail-data">{Math.round(solarRadiation)} W/m²</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={precipIcon}></img></span>
                        <span className="detail-txt">Rain: </span>
                        <span className="detail-data">{Math.round(rain)} mm/hr</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={snowfallIcon}></img></span>
                        <span className="detail-txt">Snow: </span>
                        <span className="detail-data">{Math.round(snow)} mm/hr</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={sunriseIcon}></img></span>
                        <span className="detail-txt">Sunrise: </span>
                        <span className="detail-data">{sunrise}</span>
                    </p>
                    <p className="current-weather-detail">
                        <span className="detail-icon"><img alt="icon" src={sunsetIcon}></img></span>
                        <span className="detail-txt">Sunset: </span>
                        <span className="detail-data">{sunset}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Weather;