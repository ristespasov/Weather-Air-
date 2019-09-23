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
            props.description && <p>{props.description}</p>
        }
        {
            props.windSpeed && <p>{Math.round(props.windSpeed)} m/s</p>
        }
        {
            props.humidity && <p>{props.humidity}%</p>
        }
        {
            props.pressure && <p>{Math.round(props.pressure)} mba</p>
        }
        {
            props.uv && <p>{Math.round(props.uv)}</p>

        }
        {
            props.error && <p>{props.error}</p>
        }
    </div>
);

export default Weather;
