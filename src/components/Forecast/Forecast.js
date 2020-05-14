import React from 'react';
import moment from 'moment';
import './Forecast.css';
import Icon from '../Icon/Icon';

const Forecast = props => (

    <div id="forecast">
        {
            props.day.valid_date != null &&
            <p>{moment(props.day.valid_date).format('ddd')}</p>
        }
        {
            props.day.weather.icon != null &&
            <div className="f-weather-icon-wrapper">
                <span><Icon icon={props.day.weather.icon} /></span>
            </div>
        }
        {
            props.day.max_temp != null &&
            <p><span className="f-max-temp">{Math.round(props.day.max_temp)}° C</span></p>
        }
        {
            props.day.min_temp != null &&
            <p><span className="f-min-temp">{Math.round(props.day.min_temp)}° C</span></p>
        }
    </div>
);

export default Forecast;