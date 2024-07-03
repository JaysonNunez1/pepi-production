/* eslint-disable no-unused-vars */
import React from 'react';


function Homepage() {
    return (
        <div className="homepage"> 
        <header>
            <h1>Pepi Production</h1>
            <p>Photobooth & Dj Services</p>
        </header>
        <section className="hero">
            <img src="" alt="Hero Image"/>
            <div className="overlay">
                <h2>Capture the Moment</h2>
                <p>Photobooth & Dj Services</p>
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
