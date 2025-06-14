import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <p>© 2025 jargs cormark. All rights reserved. Empowering small businesses with smart tools — from finance tracking to hospitality management and AI-driven growth.</p>


                </div>
                <div className="footer-col">
                    <h3>About</h3>
                    <a href="#">Our Mission</a>
                    <a href="#">How It Works</a>
                    <a href="#">Latest Updates</a>
                </div>

                <div className="footer-col">
                    <h3>Solutions</h3>
                    <a href="#">Finance Tracker</a>
                    <a href="#">Hospitality Manager</a>
                    <a href="#">AI-Powered Marketing</a>
                </div>

                <div className="footer-col">
                    <h3>Support</h3>
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Request a Demo</a>
                </div>

                <div className="footer-col">
                    <h3>Socials</h3>
                    <div className="footer-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
