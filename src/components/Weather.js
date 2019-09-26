import React from "react";
import windSpeedIcon from "../detail icons/windspeed.png";
import humidityIcon from "../detail icons/humidity.png";
import pressureIcon from "../detail icons/pressure.png";
import uvIcon from "../detail icons/uv.png";
import partOfDayIcon from "../detail icons/pod.png";
import windDirIcon from "../detail icons/winddir.png";
import dewPointIcon from "../detail icons/dewpoint.png";
import cloudCoverageIcon from "../detail icons/cloudcoverage.png";
import visibilityIcon from "../detail icons/visibility.png";
import solarRadIcon from "../detail icons/solarrad.png";
import precipIcon from "../detail icons/precip.png";
import snowfallIcon from "../detail icons/snowfall.png";
import sunriseIcon from "../detail icons/sunrise.png";
import sunsetIcon from "../detail icons/sunset.png";
// import rain from '../icons/rain.png';

const Weather = props => (
    <div>
        {
            props.city &&
            <p className="current-weather-basic">
                <span className="current-city">{props.city}</span>
            </p>
        }
        {
            props.temperature &&
            <p className="current-weather-basic">
                <span className="current-temp">{Math.round(props.temperature)} °C</span>
            </p>
        }
        {
            props.realFeel &&
            <p className="current-weather-basic">
                <span className="real-feel-temp">Real feel: {Math.round(props.realFeel)} °C</span>
            </p>
        }
        {
            props.description &&
            <p className="current-weather-basic">
                <span className="current-weather-descritpion">{props.description}</span>
            </p>
        }
        {
            props.windSpeed != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={windSpeedIcon}></img></span>
                <span className="detail-txt">Wind speed: </span>
                <span className="detail-data">{Math.round(props.windSpeed)} m/s</span>
            </p>
        }
        {
            props.humidity != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={humidityIcon}></img></span>
                <span className="detail-txt">Humidity: </span>
                <span className="detail-data">{props.humidity}%</span>
            </p>
        }
        {
            props.pressure != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={pressureIcon}></img></span>
                <span className="detail-txt">Pressure: </span>
                <span className="detail-data">{Math.round(props.pressure)} mb</span>
            </p>
        }
        {
            props.uv != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={uvIcon}></img></span>
                <span className="detail-txt">UV Index: </span>
                <span className="detail-data">{Math.round(props.uv)}</span>
            </p>
        }
        {
            props.partOfDay != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={partOfDayIcon}></img></span>
                <span className="detail-txt">Part of day: </span>
                <span className="detail-data">{props.partOfDay}</span>
            </p>
        }
        {
            props.windDirectionTxt != null && props.windDirectionDeg != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={windDirIcon}></img></span>
                <span className="detail-txt">Wind direction: </span>
                <span className="detail-data">{props.windDirectionTxt}, {Math.round(props.windDirectionDeg)}°</span>
            </p>
        }
        {
            props.dewPoint != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={dewPointIcon}></img></span>
                <span className="detail-txt">Dew point: </span>
                <span className="detail-data">{Math.round(props.dewPoint)} °C</span>
            </p>
        }
        {
            props.clouds != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={cloudCoverageIcon}></img></span>
                <span className="detail-txt">Cloud coverage: </span>
                <span className="detail-data">{props.clouds}%</span>
            </p>
        }
        {
            props.visibility != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={visibilityIcon}></img></span>
                <span className="detail-txt">Visibility: </span>
                <span className="detail-data">{Math.round(props.visibility)} km</span>
            </p>
        }
        {
            props.solarRadiation != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={solarRadIcon}></img></span>
                <span className="detail-txt">Solar radiation: </span>
                <span className="detail-data">{Math.round(props.solarRadiation)} W/m²</span>
            </p>
        }
        {
            props.rain != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={precipIcon}></img></span>
                <span className="detail-txt">Rain: </span>
                <span className="detail-data">{Math.round(props.rain)} mm/hr</span>
            </p>
        }
        {
            props.snow != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={snowfallIcon}></img></span>
                <span className="detail-txt">Snow: </span>
                <span className="detail-data">{Math.round(props.snow)} mm/hr</span>
            </p>
        }
        {
            props.sunrise != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={sunriseIcon}></img></span>
                <span className="detail-txt">Sunrise: </span>
                <span className="detail-data">{props.sunrise}</span>
            </p>
        }
        {
            props.sunset != null &&
            <p className="current-weather-detail">
                <span className="detail-icon"><img alt="icon" src={sunsetIcon}></img></span>
                <span className="detail-txt">Sunset: </span>
                <span className="detail-data">{props.sunset}</span>
            </p>
        }
        {
            props.error && <p>{props.error}</p>
        }
    </div>

);



export default Weather;
