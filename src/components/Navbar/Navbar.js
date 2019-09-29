import React from 'react';
import './Navbar.css';
import logoNav from '../../logo/logo-nav.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const navbar = () => (

    <Navbar className="navbar" expand="md">
        <Navbar.Brand href="#home"><img className="logo-nav" alt="logo" src={logoNav} /></Navbar.Brand>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home"><span className="a">Home</span></Nav.Link>
                <Nav.Link href="#link"><span className="a">Weather and Air</span></Nav.Link>
                <Nav.Link href="#link"><span className="a">Blog</span></Nav.Link>
                <NavDropdown title={<span className="a">Resources</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">API</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Photos and Videos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#home"><span className="a">Sign Up</span></Nav.Link>
                <Nav.Link href="#link"><span className="a">Login</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;