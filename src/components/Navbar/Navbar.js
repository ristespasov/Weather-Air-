import React from 'react';
import './Navbar.css';
import logoNav from '../../logo/logo-nav.png';

const Navbar = () => (

    <nav className="navbar navbar-expand-sm">

        <a className="navbar-brand" href="/#"><img className="logo-nav" alt="logo" src={logoNav} /></a>

        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Weather and Air</a>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbardrop" data-toggle="dropdown">Data</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/#">Link 1</a>
                    <a className="dropdown-item" href="/#">Link 2</a>
                    <a className="dropdown-item" href="/#">Link 3</a>
                </div>
            </li>
        </ul>

        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/#"><span class="fas fa-user"></span> Sign Up</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#"><span class="fas fa-sign-in-alt"></span> Login</a>
            </li>
        </ul>
    </nav>
)

export default Navbar;