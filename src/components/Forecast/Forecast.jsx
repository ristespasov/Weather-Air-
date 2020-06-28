import React, { useContext } from 'react';
import moment from 'moment';
import './Forecast.css';

// CONTEXT
import Context from '../../Context/Context';

// COMPONENTS
import Icon from '../Icon/Icon';

const Forecast = () => {
    const { forecast } = useContext(Context);

    return (
        <div className="container d-flex justify-content-between">
            {forecast.slice(1).map((item, i) => (
                <div id="forecast" key={i}>
                    <p>{moment(item.valid_date).format('ddd')}</p>
                    <div className="f-weather-icon-wrapper">
                        <Icon icon={item.weather.icon} />
                    </div>
                    <p><span className="f-max-temp">{Math.round(item.max_temp)}° C</span></p>
                    <p><span className="f-min-temp">{Math.round(item.min_temp)}° C</span></p>
                </div>
            ))}
        </div>

    )
};

export default Forecast;