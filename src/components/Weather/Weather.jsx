import React, { useContext } from "react";
import './Weather.css';
import moment from 'moment';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// COUNTUP
import CountUp from 'react-countup';

// COMPONENTS
import Icon from '../Icon/Icon';

// CONTEXT
import Context from '../../Context/Context';

const Weather = () => {
    const { weather } = useContext(Context);
    const { icon, city, country, temperature, realFeel, weatherDescription, windSpeed, humidity, rain, pressure, uv, windDirectionTxt, windDirectionDeg, sunrise, sunset, aqi } = weather;

    // parse time using 24-hour clock and use UTC to prevent DST issues
    var start = moment.utc(sunrise, "HH");
    var end = moment.utc(sunset, "HH");
    var currentTime = moment().format("HH");
    var passedHours = moment.utc(currentTime, "HH");

    // account for crossing over to midnight the next day
    if (end.isBefore(start)) end.add(1, 'day');

    // calculate the duration
    var durationSunriseSunset = moment.duration(end.diff(start));
    var progressSunriseSunset = moment.duration(passedHours.diff(start));

    // format a string result
    var totalTime = moment.utc(+durationSunriseSunset).format("HH");
    var totalTimeInt = parseInt(totalTime, 10);

    var passed = moment.utc(+progressSunriseSunset).format("HH");
    var passedInt = parseInt(passed, 10);

    var sunPathValue;
    passedInt >= totalTimeInt ? sunPathValue = 100 : sunPathValue = 100 / totalTimeInt * passedInt;

    return (
        <div>
            <div id="search-weather-wrapper">
                <div className="location-date-container">
                    <div>{city}, {country}</div>
                    <div>{`${moment().format('dddd, MMMM Do YYYY')} at ${moment().format('HH:mm')} `}</div>
                </div>
                <div className="current-weather-detail-container">
                    <div className="current-weather">
                        <div className="current-weather-icon">
                            <Icon icon={icon} />
                        </div>
                        <div>
                            <div className="current-weather-temp"><CountUp start={0} end={Math.round(temperature)} duration={3} />°</div>
                            <div className="current-weather-description">{weatherDescription}</div>
                        </div>
                    </div>
                    <div className="current-weather-details">
                        <div>
                            <div className="detail-data"><span>{Math.round(realFeel)}°</span></div>
                            <div className="detail-txt">Real feel</div>
                            <div className="detail-data"><span>{Math.round(pressure)}</span> mb</div>
                            <div className="detail-txt">Pressure</div>
                        </div>
                        <div>
                            <div className="detail-data"><span>{Math.round(rain)}</span> mm/hr</div>
                            <div className="detail-txt">Rain</div>
                            <div className="detail-data">
                                <span>{Math.round(uv)}</span>
                                {uv === 0 ? ' None'
                                    : uv <= 2 ? ' Low'
                                        : uv <= 5 ? ' Medium'
                                            : uv <= 7 ? ' High'
                                                : uv <= 10 ? ' Very High'
                                                    : uv > 10 ? ' Extreme'
                                                        : null}
                            </div>
                            <div className="detail-txt">UV</div>
                        </div>
                        <div>
                            <div className="detail-data"><span>{Math.round(windSpeed)}</span> m/s</div>
                            <div className="detail-txt">Wind speed</div>
                            <div className="detail-data"><span>{Math.round(windDirectionDeg)}°</span> {windDirectionTxt}</div>
                            <div className="detail-txt">Wind direction</div>
                        </div>
                    </div>
                </div>
                <div className="air-humidity-sun-container">
                    <div className="air-quality">
                        <CircularProgressbarWithChildren
                            value={aqi}
                            strokeWidth={5}
                            styles={{
                                root: { width: '70%' },
                                path: {
                                    stroke: aqi <= 50 ? '#73bc8d' : aqi <= 100 ? '#FFFF66' : aqi > 100 ? '#B03A2E' : '#fff',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                },
                                trail: {
                                    stroke: 'rgba(0, 0, 0, 0.1)'
                                },
                                text: {
                                    fill: '#fff'
                                }
                            }}
                        >
                            <div className="progressbar-data"><span>{aqi}</span></div>
                            <div className="progressbar-data">{aqi <= 50 ? 'Good' : aqi <= 100 ? 'Moderate' : aqi > 100 ? 'Poor' : 'N/A'}</div>
                            <div className="progressbar-txt">AQI</div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="humidity">
                        <CircularProgressbarWithChildren
                            value={humidity}
                            strokeWidth={5}
                            styles={{
                                root: { width: '70%' },
                                path: {
                                    stroke: '#3e98c7',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                },
                                trail: {
                                    stroke: 'rgba(0, 0, 0, 0.1)'
                                },
                                text: {
                                    fill: '#fff'
                                }
                            }}
                        >
                            <div className="progressbar-data"><span>{Math.round(humidity)}</span>%</div>
                            <div className="progressbar-txt">Humidity</div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="sunrise-sunset">
                        <CircularProgressbarWithChildren
                            value={sunPathValue}
                            strokeWidth={5}
                            circleRatio={0.5}
                            styles={{
                                root: { width: '70%' },
                                path: {
                                    stroke: '#FFFF66',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(-0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                trail: {
                                    stroke: 'rgba(0, 0, 0, 0.1)',
                                    transform: 'rotate(-0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: '#fff'
                                }
                            }}
                        >
                            <div className="sun-details">
                                <span>
                                    <div>{sunrise}</div>
                                    <div>Sunrise</div>
                                </span>
                                <span>
                                    <div>{sunset}</div>
                                    <div>Sunset</div>
                                </span>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;