import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footertitle'>
                OUR MISSION
            </div>
            <div className='note'>
                <div>
                    With this portal anyone across the nation will be able to access and get the latest updates on any natural disaster occuring accross the nation. User will also be able to make Donate.
                </div>
                Thank you for visiting our website. Stay healthy!
            </div>

            <section className="cta flex">
                <p>Ready to enhance crisis management in your community?</p>
                <button className='flex'>Contact Us</button>
            </section>
        </footer>
    )
}

export default Footer;