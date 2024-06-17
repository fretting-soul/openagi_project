import React from 'react';
import logo from '../public/images/logo.png';

const Header = () => (
    <header>
        <img src={logo} alt="Logo" />
        <h1>OpenAGI App</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
);

export default Header;

