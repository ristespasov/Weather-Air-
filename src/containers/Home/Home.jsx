import React, { useState, useEffect } from 'react';

// AXIOS
import axios from 'axios';

// CONTEXT
import Context from '../../Context/Context';

// COMPONENTS
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import Loading from '../../components/Loading/Loading';

const apiKey = 'ce96de25f5984c07a75e087c2285c9b1';
const units = 'metric';

const Home = () => {
    const [{ currentCity, loading }, setCurrentCityData] = useState({ currentCity: {}, loading: true });
    const getCurrentCityWeather = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            const request = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=${units}`);
            const data = request.data.data[0];
            setCurrentCityData({
                currentCity: {
                    icon: data.weather.icon,
                    city: data.city_name,
                    country: data.country_code,
                    temperature: data.temp,
                    realFeel: data.app_temp,
                    weatherDescription: data.weather.description,
                    humidity: data.rh,
                    uv: data.uv,
                    aqi: data.aqi,
                },
                loading: false
            });
        });
    }

    useEffect(() => {
        getCurrentCityWeather();
    }, []);

    return (
        <Context.Provider value={{ currentCity }}>
            {loading ? <Loading /> : <CurrentCity />}
        </Context.Provider>
    )
}

export default Home;



