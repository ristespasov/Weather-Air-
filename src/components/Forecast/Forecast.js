import React from 'react';
import moment from 'moment';
import './Forecast.css';
import Icon from '../Icon/Icon';

const Forecast = props => (

    <div id="forecast">
        <div className="days">
            <div className="day-item">
                {
                    props.day.valid_date != null &&
                    <p className="daily-detail"><span className="day">{moment(props.day.valid_date).format('ddd')}</span></p>
                }
                {
                    props.day.weather.icon != null &&
                    <div className="d-weather-icon-div">
                        <span className="d-weather-icon"><Icon className="daily-icon" icon={props.day.weather.icon} /></span>
                    </div>
                }
                {
                    props.day.max_temp != null &&
                    <p className="daily-detail"><span className="d-max-temp">{Math.round(props.day.max_temp)}° C</span></p>
                }
                {
                    props.day.min_temp != null &&
                    <p className="daily-detail"><span className="d-min-temp">{Math.round(props.day.min_temp)}° C</span></p>
                }
            </div>
        </div>
    </div>
);

export default Forecast;