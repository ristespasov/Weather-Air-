import React, { useContext } from "react";
import './Form.css';

// CONTEXT
import Context from '../../Context/Context';

const Form = () => {

    const { getWeather } = useContext(Context);

    return (
        <div>
            <div className="searchbar">
                <form onSubmit={getWeather} autoComplete="off">
                    <input type="text" name="city" placeholder="ex. New York City, US" />
                </form>
            </div>
        </div>
    );
};

export default Form;