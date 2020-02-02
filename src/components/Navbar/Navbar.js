import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoNav from '../../logo/logo-nav.png';

const navbar = () => (

    <Navbar className="navbar" expand="md">
        <Navbar.Brand href="#home"><img className="logo-nav" alt="logo" src={logoNav} /></Navbar.Brand>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to="/" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }} exact><span className="a">Home</span></NavLink>
                <NavLink to="weather-and-air" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }}><span className="a">Weather and Air</span></NavLink>
                <NavLink to="blog" activeClassName="active-link" className="nav-link" style={{ textDecoration: 'none' }}><span className="a">Blog</span></NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;