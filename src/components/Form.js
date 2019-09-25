import React from "react";

const Form = props => (
    <form className="form" onSubmit={props.getWeather}>
        <input className="city-input" type="text" name="city" placeholder="Search place..." />
        <button className="search-btn">Search</button>
    </form>
);

export default Form;