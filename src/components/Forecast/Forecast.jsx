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
        <div id="search-forecast-wrapper">
            {forecast.slice(1).map((item, i) => (
                <div className="forecast-item" key={i}>
                    <div className="f-day">{moment(item.valid_date).format('ddd')}</div>
                    <div className="f-weather-icon-wrapper">
                        <Icon icon={item.weather.icon} />
                    </div>
                    <div className="f-max-temp">{Math.round(item.max_temp)}°</div>
                    <div className="f-min-temp">{Math.round(item.min_temp)}°</div>
                </div>
            ))}
        </div>

    )
};

export default Forecast;