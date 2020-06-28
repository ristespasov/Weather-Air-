import React from 'react';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import WeatherAir from '../components/WeatherAir/WeatherAir';
import News from '../components/News/News';
import Error from '../components/Error/Error';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/weather-and-air" component={WeatherAir} />
                <Route path="/news" component={News} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;