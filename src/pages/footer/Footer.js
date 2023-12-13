import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Hostels</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Email: 2023@accofinder.com</p>
            <p>Phone: +265(0)997855617</p>
          </div>
          <div className="footer-social">
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>&copy; 2023 accommodation finder.com, All rights reserved</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
