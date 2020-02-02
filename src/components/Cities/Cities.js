import React from 'react'
import './Cities.css';
import Icon from '../Icon/Icon';

import aqiIcon from '../../detail-icons/aqi.png'
import humidityIcon from '../../detail-icons/humidity.png';
import uvIcon from '../../detail-icons/uv.png';

const Cities = props => {

    const { icon_1, city_1, country_1, temperature_1, realFeel_1, description_1, humidity_1, uv_1, aqi_1,
        icon_2, city_2, country_2, temperature_2, realFeel_2, description_2, humidity_2, uv_2, aqi_2,
        icon_3, city_3, country_3, temperature_3, realFeel_3, description_3, humidity_3, uv_3, aqi_3 } = props;

    return (
        <div className="parrent container">
            {icon_1 != null && city_1 != null && country_1 != null && temperature_1 != null && realFeel_1 != null && description_1 != null && humidity_1 != null && uv_1 != null && aqi_1 != null &&
                <div className="wrapper">
                    <div className="cities-name">{city_1}, {country_1}</div>
                    <div className="first-div d-inline-block">
                        <div className="cities-weather-icon"><Icon icon={icon_1} /></div>
                        <div className="cities-weather-description">{description_1}</div>
                    </div>
                    <div className="second-div d-inline-block">
                        <span className="cities-temp d-block">{Math.round(temperature_1)}° C</span>
                        <span className="cities-rf-temp d-block">Real feel: {Math.round(realFeel_1)}° C</span>
                    </div>
                    <div className="third-div d-inline-block">
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={aqiIcon} /></span>
                            {
                                aqi_1 <= 50 ?
                                    <span className="cities-detail-data" style={{ color: '#4dff4d' }}>{Math.round(aqi_1)}</span> :
                                    aqi_1 <= 100 ?
                                        <span className="cities-detail-data" style={{ color: '#ffff4d' }}>{Math.round(aqi_1)}</span> :
                                        aqi_1 > 100 ?
                                            <span className="cities-detail-data" style={{ color: '#CD5C5C' }}>{Math.round(aqi_1)}</span> :
                                            <span className="cities-detail-data" style={{ color: '#fff' }}>{Math.round(aqi_1)}</span>
                            }
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={humidityIcon} /></span>
                            <span className="cities-detail-data">{humidity_1}%</span>
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={uvIcon} /></span>
                            <span className="cities-detail-data">{Math.round(uv_1)}</span>
                        </div>
                    </div>
                </div>
            }
            {icon_2 != null && city_2 != null && country_2 != null && temperature_2 != null && realFeel_2 != null && description_2 != null && humidity_2 != null && uv_2 != null && aqi_2 != null &&
                <div className="wrapper">
                    <div className="cities-name">{city_2}, {country_2}</div>
                    <div className="first-div d-inline-block">
                        <div className="cities-weather-icon"><Icon icon={icon_2} /></div>
                        <div className="cities-weather-description">{description_2}</div>
                    </div>
                    <div className="second-div d-inline-block">
                        <span className="cities-temp d-block">{Math.round(temperature_2)}° C</span>
                        <span className="cities-rf-temp d-block">Real feel: {Math.round(realFeel_2)}° C</span>
                    </div>
                    <div className="third-div d-inline-block">
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={aqiIcon} /></span>
                            {
                                aqi_2 <= 50 ?
                                    <span className="cities-detail-data" style={{ color: '#4dff4d' }}>{Math.round(aqi_2)}</span> :
                                    aqi_2 <= 100 ?
                                        <span className="cities-detail-data" style={{ color: '#ffff4d' }}>{Math.round(aqi_2)}</span> :
                                        aqi_2 > 100 ?
                                            <span className="cities-detail-data" style={{ color: '#CD5C5C' }}>{Math.round(aqi_2)}</span> :
                                            <span className="cities-detail-data" style={{ color: '#fff' }}>{Math.round(aqi_2)}</span>
                            }
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={humidityIcon} /></span>
                            <span className="cities-detail-data">{humidity_2}%</span>
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={uvIcon} /></span>
                            <span className="cities-detail-data">{Math.round(uv_2)}</span>
                        </div>
                    </div>
                </div>
            }
            {icon_3 != null && city_3 != null && country_3 != null && temperature_3 != null && realFeel_3 != null && description_3 != null && humidity_3 != null && uv_3 != null && aqi_3 != null &&
                <div className="wrapper">
                    <div className="cities-name">{city_3}, {country_3}</div>
                    <div className="first-div d-inline-block">
                        <div className="cities-weather-icon"><Icon icon={icon_3} /></div>
                        <div className="cities-weather-description">{description_3}</div>
                    </div>
                    <div className="second-div d-inline-block">
                        <span className="cities-temp d-block">{Math.round(temperature_3)}° C</span>
                        <span className="cities-rf-temp d-block">Real feel: {Math.round(realFeel_3)}° C</span>
                    </div>
                    <div className="third-div d-inline-block">
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={aqiIcon} /></span>
                            {
                                aqi_3 <= 50 ?
                                    <span className="cities-detail-data" style={{ color: '#4dff4d' }}>{Math.round(aqi_3)}</span> :
                                    aqi_3 <= 100 ?
                                        <span className="cities-detail-data" style={{ color: '#ffff4d' }}>{Math.round(aqi_3)}</span> :
                                        aqi_2 > 100 ?
                                            <span className="cities-detail-data" style={{ color: '#CD5C5C' }}>{Math.round(aqi_3)}</span> :
                                            <span className="cities-detail-data" style={{ color: '#fff' }}>{Math.round(aqi_3)}</span>
                            }
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={humidityIcon} /></span>
                            <span className="cities-detail-data">{humidity_3}%</span>
                        </div>
                        <div>
                            <span className="cities-detail-icon"><img alt="icon" src={uvIcon} /></span>
                            <span className="cities-detail-data">{Math.round(uv_3)}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cities;