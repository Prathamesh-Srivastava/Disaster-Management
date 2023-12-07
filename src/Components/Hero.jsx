// Home.js

import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
import backgroundImage from "../assests/background.webp"

const Hero = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <header>
        <h1>Crisis Management System</h1>
        <p>Empowering communities to respond effectively to crises</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Real-time Monitoring</h2>
          <p>Monitor and track crises in real-time to ensure timely responses.</p>
        </div>

        <div className="feature">
          <h2>Emergency Alerts</h2>
          <p>Receive instant alerts and notifications during critical situations.</p>
        </div>

        <div className="feature">
          <h2>Resource Allocation</h2>
          <p>Efficiently allocate resources to areas affected by crises.</p>
        </div>
      </section>

      <section className="cta">
        <p>Ready to enhance crisis management in your community?</p>
        <button>Contact Us</button>
      </section>
    </div></>
  );
};

export default Hero;
