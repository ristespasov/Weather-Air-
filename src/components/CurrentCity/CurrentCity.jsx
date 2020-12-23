import React, { useContext } from 'react'
import './CurrentCity.css';

// CONTEXT
import Context from '../../Context/Context';

// COUNTUP
import CountUp from 'react-countup';

// COMPONENTS
import Icon from '../Icon/Icon';

const CurrentCity = () => {
    const { currentCity } = useContext(Context);
    const { icon, city, country, temperature, weatherDescription, humidity, uv, aqi } = currentCity;

    return (
        <div id="current-city">
            <div className="current-city-weather-wrapper">
                <div className="location-name">
                    <span className="text">Weather for your current location: </span><span className="city-name">{city}, {country}</span>
                </div>
                <div className="current-city-weather-container">
                    <div className="weather-icon-container">
                        <Icon icon={icon} />
                    </div>
                    <div className="temp-descr">
                        <div className="current-weather-temp"><CountUp start={0} end={Math.round(temperature)} duration={3} />°</div>
                        <div className="current-weather-description">{weatherDescription}</div>
                    </div>
                </div>
                <div className="current-city-weather-details">
                    <div>
                        <div className="detail-data">
                            <span style={aqi <= 50 ? { color: '#73bc8d' } : aqi <= 100 ? { color: '#e7d748' } : aqi > 100 ? { color: '#B03A2E' } : { color: '#fff' }}>
                                {Math.round(aqi)}
                            </span>
                            {aqi <= 50 ? ' Good' : aqi <= 100 ? ' Moderate' : aqi > 100 ? ' Poor' : 'N/A'}
                        </div>
                        <div className="detail-txt">AQI</div>
                    </div>
                    <div>
                        <div className="detail-data"><span>{humidity}</span>%</div>
                        <div className="detail-txt">Humidity</div>
                    </div>
                    <div>
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
                </div>
            </div>
        </div>
    )
}

export default CurrentCity;