/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/pepi-logo1.jpeg';
import hero from '../assets/pepi1.jpg';
function Homepage() {
    return (
        <div className="homepage"> 
        <header>
        <img src={logo} alt="Pepi Production Logo" width="290px" />
            <h1>Pepi Production</h1>
            <p>Photobooth & Dj Services</p>
        </header>
        <section className="hero">
            <img src={hero} alt="Hero Image"/>
            <div className="overlay">
                <h2></h2>
                <p></p>
            </div>
        </section>
        <section className="services">
            <h2> Our Services</h2>
            <ul>
                <li>Photobooth Rentals</li>
                <li>Dj Services</li>
                <li>Custom Event Packages</li>
            </ul>
        </section>
    </div>
    );
}

export default Homepage;
