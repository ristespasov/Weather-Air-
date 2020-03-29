import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WeatherAir from './components/WeatherAir/WeatherAir';
import Blog from './components/Blog/Blog';

import Error from './components/Error/Error';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/weather-and-air" component={WeatherAir} />
                    <Route path="/blog" component={Blog} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    };
};