import React from 'react';
import './SectionButtons.css';

const SectionButtons = () => (

    <div>
        <div className="section-btn-div d-inline-block">
            <button id="current" className="section-btn">Current</button>
        </div>
        <div className="section-btn-div d-inline-block">
            <button id="hourly" className="section-btn">Hourly</button>
        </div>
        <div className="section-btn-div d-inline-block">
            <button id="forecast" className="section-btn">Forecast</button>
        </div>
    </div>
);

export default SectionButtons;