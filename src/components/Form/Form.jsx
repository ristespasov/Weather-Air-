import React, { useContext } from "react";
import './Form.css';

// CONTEXT
import Context from '../../Context/Context';

const Form = () => {

    const { getWeather } = useContext(Context);

    return (
        <div>
            <div className="form-div">
                <form className="form" onSubmit={getWeather}>
                    <input placeholder="ex. New York City, US" className="city-input" type="text" name="city" />
                    <button className="search-btn">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Form;