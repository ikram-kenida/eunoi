import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';
import { FaPaperPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../images/whiteLogo.png';

const Footer = () => {
  return (
    <footer className="footer-section text-white mt-5">
      <div className="container py-4">
        {/* Top Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="footer-logo" />
          </div>

          {/* Links */}
          <ul className="footer-links d-flex gap-4 mb-0 list-unstyled">
            <li><a href="#home" className="footer-link">HOME</a></li>
            <li><a href="#advice" className="footer-link">ADVICE</a></li>
            <li><a href="#time" className="footer-link">TIME MANAGEMENT</a></li>
          </ul>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            <a href="#" className="icon-circle"><FaPaperPlane /></a>
            <a href="#" className="icon-circle"><FaFacebookF /></a>
            <a href="#" className="icon-circle"><FaInstagram /></a>
          </div>
        </div>

        {/* Email Input */}
        <div className="email-container d-flex justify-content-center mb-4">
  <div className="email-box d-flex align-items-center">
    <input
      type="email"
      placeholder="ENTER YOUR EMAIL"
      className="email-input"
    />
    <FaPaperPlane className="email-icon" />
  </div>
</div>

        <hr className="footer-line" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between small text-muted mt-3">
          <span className='text-teal'>© MENTAL HEALTH. ALL RIGHTS RESERVED 2025</span>
          <a href="#" className="text-decoration-none text-teal">TERMS & CONDITIONS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
