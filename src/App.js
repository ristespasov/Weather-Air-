import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cities from './components/Cities/Cities';
import Error from './components/Error/Error';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Cities} exact />
                        <Route path="/weather-and-air" component={Main} />
                        <Route path="/blog" />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
};