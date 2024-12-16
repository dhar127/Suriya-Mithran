import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // or 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size and set the isMobile state
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 840);
  };

  // Listen for window resize event to toggle the hamburger icon
  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  // Function to handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the side menu
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>SURIYA MITHRAN CHARITABLE TRUST</h1>
        <h6>(DEADDICTION CUM REHABILITATION CENTRE)</h6>
      </div>

      {/* Hamburger menu (only visible on mobile screens) */}
      {isMobile && (
        <div className="hamburger-menu" onClick={toggleSideMenu}>
          <GiHamburgerMenu className="hamburger-icon" /> {/* Icon Component */}
        </div>
      )}

      {/* Side Menu for mobile */}
      <div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-190} duration={500}>About</Link></li>
          <li><Link to="programs" smooth={true} offset={-300} duration={500}>Programs</Link></li>
          <li><Link to="campus" smooth={true} offset={-200} duration={500}>Gallery</Link></li>
          <li><Link to="contact" smooth={true} offset={3900} duration={500}>
            <button className="btn">Contact Us</button>
          </Link></li>
        </ul>
      </div>

      {/* Desktop Navbar Menu */}
      <ul className="navbar-menu">
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-190} duration={500}>About</Link></li>
        <li><Link to="programs" smooth={true} offset={-300} duration={500}>Programs</Link></li>
        <li><Link to="campus" smooth={true} offset={-200} duration={500}>Gallery</Link></li>
        <li><Link to="contact" smooth={true} offset={3900} duration={500}>
          <button className="btn">Contact Us</button>
        </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
