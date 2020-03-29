import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logoNav from '../../assets/logo/logo-nav.png';

const navbar = () => {
    return (
        <Navbar collapseOnSelect className="navbar" expand="md">
            <Navbar.Brand href="#home"><img className="logo-nav" alt="logo" src={logoNav} /></Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <NavLink to="/" activeClassName="active-link" className="nav-link" exact><span>Home</span></NavLink>
                    <NavLink to="weather-and-air" activeClassName="active-link" className="nav-link"><span >Weather and Air</span></NavLink>
                    <NavLink to="blog" activeClassName="active-link" className="nav-link"><span>Blog</span></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navbar;