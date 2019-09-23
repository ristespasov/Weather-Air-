import React from "react";

const Weather = props => (
    <div>
        {
            props.icon && <p>{props.icon}</p>
        }
        {
            props.city && <p>{props.city}</p>
        }
        {
            props.temperature && <p>{Math.round(props.temperature)} °C</p>
        }
        {
            props.realFeel && <p>Real feel: {Math.round(props.realFeel)} °C</p>
        }
        {
            props.description && <p>{props.description}</p>
        }
        {
            props.windSpeed && <p>{Math.round(props.windSpeed)} m/s</p>
        }
        {
            props.humidity && <p>{props.humidity}%</p>
        }
        {
            props.pressure && <p>{Math.round(props.pressure)} mb</p>
        }
        {
            props.uv && <p>{Math.round(props.uv)}</p>
        }
        {
            props.partOfDay && <p>Part of day: {props.partOfDay}</p>
        }
        {
            props.windDirectionTxt && props.windDirectionDeg && <p>{props.windDirectionTxt}, {Math.round(props.windDirectionDeg)}°</p>
        }
        {
            props.dewPoint && <p>{Math.round(props.dewPoint)} °C</p>
        }
        {
            props.clouds && <p>{props.clouds}%</p>
        }
        {
            props.visibility && <p>Visibility: {props.visibility} KM</p>
        }
        {
            props.solarRadiation && <p>Solar radiation: {props.solarRadiation} W/m2</p>
        }
        {
            props.rain && <p>{props.rain} mm/hr</p>
        }
        {
            props.snow && <p>{props.snow} mm/hr</p>
        }
        {
            props.sunrise && <p>{props.sunrise}</p>
        }
        {
            props.sunset && <p>{props.sunset}</p>
        }
        {
            props.error && <p>{props.error}</p>
        }
    </div>
);

export default Weather;
