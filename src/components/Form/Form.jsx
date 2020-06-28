import React, { useState, useContext } from "react";
import './Form.css';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

// CONTEXT
import Context from '../../Context/Context';

const Form = () => {
    let options = {
        types: ['(cities)'],
        componentRestrictions: { country: "us" }
    };

    const [address, setAddress] = useState("");
    const { getWeather } = useContext(Context);

    const handleSelect = async value => {
        await geocodeByAddress(value);
        setAddress(value);
    };

    return (
        <div>
            <PlacesAutocomplete
                options={options}
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, options }) => (
                    <div className="form-div">
                        <form className="form" onSubmit={getWeather}>
                            <input {...getInputProps({ placeholder: "ex. New York City, US" })} className="city-input" type="text" name="city" />
                            <button className="search-btn">Search</button>
                            <div className="suggestions">
                                {suggestions.map(suggestion => {
                                    const style = {
                                        fontFamily: 'Quicksand',
                                        textAlign: 'left',
                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                    };
                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        </form>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
};

export default Form;