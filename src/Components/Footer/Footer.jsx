import React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook.png';

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Suriya Mithran. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      <a
        href="https://www.facebook.com/SuriyaMitharaRehabiltationioncentre?mibextid=qi2Omg&rdid=DVtN4Lmy9Sb4kGpD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18LzxAEw5p%2F%3Fmibextid%3Dqi2Omg#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook" />
      </a>
    </div>
  );
};

export default Footer;