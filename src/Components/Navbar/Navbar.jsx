import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <header >
        <nav>
          <img src='logo' alt="logo" />
          
          {/* Desktop Navigation */}
          <ul className="desktop-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/Feature">Feature</NavLink></li>
          </ul>

          <div className="auth-buttons">
            <NavLink to="/Register"><button className="btn">Sign In</button></NavLink>
            <NavLink to="/Login"><button className="btn">Login</button></NavLink>
          </div>

          <button className="nav-toggle-btn" onClick={toggleNav} aria-label="Toggle Menu">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {navOpen && <div className="nav-overlay" onClick={closeNav}></div>}

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${navOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeNav} aria-label="Close Menu">
          {/* <FaTimes /> */}
        </button>
        
        <ul>
          <li><NavLink to="/" onClick={closeNav}>Home</NavLink></li>
          <li><NavLink to="/About" onClick={closeNav}>About</NavLink></li>
          <li><NavLink to="/Contact" onClick={closeNav}>Contact</NavLink></li>
          <li><NavLink to="/Feature" onClick={closeNav}>Feature</NavLink></li>
        </ul>

        <div className="mobile-auth-buttons">
          <NavLink to="/Register" onClick={closeNav}>
            <button className="btn">Sign In</button>
          </NavLink>
          <NavLink to="/Login" onClick={closeNav}>
            <button className="btn">Login</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;