import React from 'react';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Navbar from '../components/Navbar/Navbar';
import Home from '../containers/Home/Home';
import SearchWeather from '../containers/SearchWeather/SearchWeather';
import News from '../containers/News/News';
import Error from '../components/Error/Error';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/weather-and-air" component={SearchWeather} />
                <Route path="/news" component={News} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;