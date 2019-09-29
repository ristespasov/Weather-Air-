import React from 'react';

const AirQuality = props => (
    <div className="circle-div">
        <div>
            {
                props.aqi != null &&
                <p className="current-aqi">
                    <span className="current-aqi-data">{props.fillCounter}</span>
                </p>
            }
        </div>
        <div id="circle1"></div>
        <div id="shadowring"></div>
        <div id="circle2"></div>
        <canvas id="counter" height="200" width="200"></canvas>
    </div>
);

export default AirQuality;