import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import logoNav from '../../assets/logo-nav.png';

const navbar = () => {
    return (

        <nav>
            <div className="nav-elements">
                <input id="nav-toggle" type="checkbox" />
                <div className="logo"><img className="logo-nav" alt="logo" src={logoNav} /></div>
                <ul className="links">
                    <NavLink to="/" activeClassName="active-link" className="nav-link" exact>Home</NavLink>
                    <NavLink to="weather-and-air" activeClassName="active-link" className="nav-link">Search</NavLink>
                    <NavLink to="news" activeClassName="active-link" className="nav-link">News</NavLink>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </div>
        </nav>
    );
}

export default navbar;