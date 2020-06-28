import React, { useContext } from 'react'
import './CurrentCity.css';

// CONTEXT
import Context from '../../Context/Context';

// COUNTUP
import CountUp from 'react-countup';

// COMPONENTS
import Icon from '../Icon/Icon';

// ASSETS
import aqiIcon from '../../assets/detail-icons/aqi.png'
import humidityIcon from '../../assets/detail-icons/humidity.png';
import uvIcon from '../../assets/detail-icons/uv.png';

const CurrentCity = () => {
    const { currentCity } = useContext(Context);
    const { icon, city, country, temperature, realFeel, weatherDescription, humidity, uv, aqi } = currentCity;

    return (
        <div className="parrent container">
            <div className="grid-container">
                <div className="city">
                    <span className="text">Weather for your current location: </span><span className="city-name">{city}, {country}</span>
                </div>
                <div className="icon">
                    <Icon icon={icon} />
                </div>
                <div className="temperature">
                    <span><CountUp start={0} end={Math.round(temperature)} duration={3} />° C</span>
                </div>
                <div className="rf-temp">
                    <span>Real feel: {Math.round(realFeel)}° C</span>
                </div>
                <div className="description">
                    <span>{weatherDescription}</span>
                </div>
                <div className="city-detail">
                    <div>
                        <span className="city-detail-icon"><img alt="icon" src={aqiIcon} /></span>
                        <span className="city-detail-data" style={aqi <= 50 ? { color: '#73bc8d' } : aqi <= 100 ? { color: '#e7d748' } : aqi > 100 ? { color: '#CD5C5C' } : { color: '#fff' }}><CountUp start={0} end={Math.round(aqi)} duration={3} /></span>
                    </div>
                    <div>
                        <span className="city-detail-icon"><img alt="icon" src={humidityIcon} /></span>
                        <span className="city-detail-data"><CountUp start={0} end={humidity} suffix={"%"} duration={3} /></span>
                    </div>
                    <div>
                        <span className="city-detail-icon"><img alt="icon" src={uvIcon} /></span>
                        <span className="city-detail-data"><CountUp start={0} end={Math.round(uv)} duration={2} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentCity;